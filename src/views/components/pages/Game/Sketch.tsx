import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { getWindowSize } from './GetWindowSize'
import { userDataState, resultDataState, UserDataType } from '@/context/atoms'

interface BricksArray {
  x: number
  y: number
  status: number
}

const Sketch = dynamic(import('react-p5'), {
  ssr: false,
})

const SketchComponent: any = (props: UserDataType) => {
  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    p5.colorMode(p5.HSB, p5.width, p5.height, 100)
    getWidth.current = p5.windowWidth
    getHeight.current = p5.windowHeight
    x.current = getWidth.current / 2
    y.current = getHeight.current - 30
    paddleX.current = (getWidth.current - 90) / 2
    brickWidth.current = getWidth.current / 5 - 20
    time = p5.millis()
  }

  const preload = (p5: any) => {
    //mugiwaraImg = p5.loadImage('mugiwarabouhi.png')
  }

  const setResultState = useSetRecoilState(resultDataState)
  // 次のような関数でデータを渡す
  // setResultState({
  //   userName: 'ユーザー名',
  //   breakUnit: [],//落とした単位の一覧
  //   time: 0,// かかった時間
  // })

  const router = useRouter()
  // ↓テスト用の配列(unitsどちらか//して使用)
  //const units = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
  const units = Object.values(props.unitList)
  let dropUnit: string[] = []
  const startBricks = units.length
  //const { width, height } = getWindowSize()
  const getWidth = useRef(500)
  const getHeight = useRef(500)
  const ballRadius = 35
  const x = useRef(500)
  const y = useRef(500)
  let dx = 5
  let dy = -5
  const paddleHeight = 10
  const paddleWidth = 90
  const paddleX = useRef(500)
  let lives = 2
  const score = useRef(0)
  const brickRowCount = 4
  const brickColumnCount = 5
  const brickWidth = useRef(100)
  const brickHeight = 35
  const brickPadding = 10
  const brickOffsetTop = 30
  const brickOffsetLeft = 30
  let textBricks: BricksArray[][] = []
  const brickNum = useRef(0)
  let time: number
  const oneSec = 1000
  let elapsedTime = 0
  const count = useRef(0)

  for (let c = 0; c < brickColumnCount; c++) {
    textBricks[c] = []
    for (let r = 0; r < brickRowCount; r++) {
      textBricks[c][r] = { x: 0, y: 0, status: 1 }
    }
  }

  const drawBall = (p5: any, ball_x: number, ball_y: number, b_ballRadius: number) => {
    p5.clear()
    p5.fill('#e6fff7')
    p5.arc(ball_x, ball_y, ballRadius, ballRadius, 0, Math.PI * 2)
  }

  const drawPaddle = (p5: any) => {
    p5.fill('#0095DD')
    p5.rect(paddleX.current, p5.height - paddleHeight, paddleWidth, paddleHeight)
  }

  const drawUnit = (p5: any) => {
    brickNum.current = 0
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        if (textBricks[c][r].status === 1) {
          const brickX = c * (brickWidth.current + brickPadding) + brickOffsetLeft
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop
          textBricks[c][r].x = brickX
          textBricks[c][r].y = brickY
          if (brickNum.current < units.length) {
            p5.fill(255, 255, 255)
            p5.rect(brickX, brickY, brickWidth.current, brickHeight)
            p5.fill(0, 0, 0)
            p5.text(units[brickNum.current], brickX, brickY, brickWidth.current, brickHeight)
            p5.textSize(35)
            p5.fill('#ff2828')
          }
          brickNum.current++
        }
      }
    }
  }

  const collisionDetection = () => {
    brickNum.current = 0
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        let t = textBricks[c][r]
        if (t.status == 1) {
          if (
            x.current > t.x - 5 &&
            x.current < t.x + brickWidth.current + 5 &&
            y.current > t.y - 5 &&
            y.current < t.y + brickHeight + 5 &&
            brickNum.current < startBricks
          ) {
            dy = -dy
            t.status = 0
            let deleteArr = units[brickNum.current]
            let index = units.indexOf(deleteArr)
            dropUnit.push(deleteArr)
            units.splice(index, 1)
            score.current++
            if (dropUnit.length >= startBricks) {
              gameOver()
            }
          }
          brickNum.current++
        }
      }
    }
  }

  const drawlives = (p5: any) => {
    if(lives >= 2){
      p5.textSize(58);
      p5.textFont('Helvetica');
      p5.fill('#f0ffff')
      p5.text('前期', getWidth.current/2.18, getHeight.current/2)
    }

    else if(lives === 1){
      p5.textSize(35);
      p5.textFont('Helvetica');
      p5.fill('#4affed')
      p5.text('⚠️留年注意❗⚠️', getWidth.current/2.45, getHeight.current/1.8)
      
      p5.textSize(58);
      p5.textFont('Helvetica');
      p5.fill('#f0ffff')
      p5.text('後期', getWidth.current/2.18, getHeight.current/2)
    }
  }

  const gameOver = () => {
    setResultState({
      userName: props.userName,
      breakUnit: dropUnit,
      time: count.current,
    })
    router.push('/result')
  }
  useEffect(() => {
    const id = setInterval(() => {
      count.current += 1
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // デバッグ用の関数なので残しといてください
  // const keyIsPressed = (p5: any) => {
  //   p5.clear()
  //   lives = 10000
  //   drawBall(p5, x.current, y.current, ballRadius)
  //   drawPaddle(p5)
  //   drawUnit(p5)
  //   drawlives(p5)
  //   collisionDetection()
  //   p5.textSize(35)
  //   p5.fill('#d6d982')
  //   p5.text(count.current + '秒経過', getWidth.current / 2.16, getHeight.current / 2.4)
  //   const now = p5.millis()
  //   elapsedTime = now - time
  //   if (y.current < 10) {
  //     dy = -dy
  //   }
  //   if (x.current + dx > getWidth.current - ballRadius || x.current + dx < ballRadius) {
  //     dx = -dx
  //     if (y.current + dy < ballRadius) {
  //       dy = -dy
  //     }
  //   } else if (y.current + dy > getHeight.current - ballRadius) {
  //     if (x.current + 12 > paddleX.current && x.current - 20 < paddleX.current + paddleWidth) {
  //       dy = -dy
  //     } else {
  //       lives--
  //       dy = -dy
  //       if (lives === 0) {
  //         p5.noLoop()
  //         gameOver()
  //       }
  //     }
  //   }
  //   x.current += dx
  //   y.current += dy
  //   // if (p5.keyIsPressed(p5.LEFT_ARROW)) {
  //   //   if (paddleX.current >= ballRadius) {
  //   //     paddleX.current -= 20
  //   //   }
  //   // } else if (p5.keyIsPressed(p5.RIGHT_ARROW)) {
  //   //   if (paddleX.current <= width - ballRadius - paddleWidth) {
  //   //     paddleX.current += 20
  //   //   }
  //   // }
  // }

  const draw = (p5: any) => {
    p5.clear()
    drawBall(p5, x.current, y.current, ballRadius)
    drawPaddle(p5)
    drawUnit(p5)
    drawlives(p5)
    collisionDetection()
    p5.textSize(35)
    p5.fill('#d6d982')
    p5.text(count.current + '秒経過', getWidth.current / 2.25, getHeight.current / 2.5)
    const now = p5.millis()
    elapsedTime = now - time
    if (y.current < 10) {
      dy = -dy
    }
    if (x.current + dx > getWidth.current - ballRadius || x.current + dx < ballRadius) {
      dx = -dx
      if (y.current + dy < ballRadius) {
        dy = -dy
      }
    } else if (y.current + dy > getHeight.current - ballRadius) {
      if (x.current + 12 > paddleX.current && x.current - 20 < paddleX.current + paddleWidth) {
        dy = -dy
      } else {
        lives--
        dy = -dy
        if (lives === 0) {
          p5.noLoop()
          gameOver()
        }
      }
    }
    x.current += dx
    y.current += dy

    if (p5.keyIsDown(p5.LEFT_ARROW)) {
      if (paddleX.current >= ballRadius) {
        paddleX.current -= 7
      }
    } else if (p5.keyIsDown(p5.RIGHT_ARROW)) {
      if (paddleX.current <= getWidth.current - ballRadius - paddleWidth) {
        paddleX.current += 7
      }
    }
  }

  const drawSakura = (p5:any, ox:number, oy:number, or:number) =>{
    let petalNum = 5;

    p5.push();
    p5.translate(ox,oy)
    p5.rotate(90);

    p5.beginShape();
    for(let theta = 0; theta < 360; theta++) {
      let A = petalNum / 180 * theta;
      let md = floor(A) % 2;
      let r = pow(-1, md) * (A - floor(A)) + md;
      let R = r + 2 * calcH(p5, r);

      let x = or * R * cos(theta);
      let y = or * R * sin(theta);

      vertex(x, y);
    }
    endShape(CLOSE);

    p5.pop();
  }

  const calcH = (p5:any, x:number) =>{
    if (x < 0.8) {
      return 0;
    } else {
      return 0.8 - x;
    }
  }

  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    getWidth.current = p5.windowWidth
    getHeight.current = p5.windowHeight
    x.current = getWidth.current / 2
    y.current = getHeight.current - 30
    paddleX.current = (getWidth.current - 90) / 2
    brickWidth.current = getWidth.current / 5 - 20
  }

  return <Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized} />
}

export default SketchComponent
