import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { getWindowSize } from './GetWindowSize'
import { resultDataState } from '@/context/atoms'

interface BricksArray {
  x: number
  y: number
  status: number
}

const Sketch = dynamic(import('react-p5'), {
  ssr: false,
})

const SketchComponent = () => {
  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    p5.colorMode(p5.HSB, p5.width, p5.height, 100)
    
    time = p5.millis();
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
  const { width, height } = getWindowSize()
  const ballRadius = 25
  const x = useRef(width - 100)
  const y = useRef(height - 30)
  let dx = 5
  let dy = -5
  const paddleHeight = 10
  const paddleWidth = 90
  const paddleX = useRef((width - paddleWidth) / 2)
  let lives = 2
  const score = useRef(0)
  const brickRowCount = 4
  const brickColumnCount = 5
  const brickWidth = width / 5.5
  const brickHeight = 35
  const brickPadding = 10
  const brickOffsetTop = 30
  const brickOffsetLeft = 30
  let text: BricksArray[][] = []
  let bricks: BricksArray[][] = []
  let mugiwaraImg = ''
  
  let time:number;
  const oneSec = 1000;
  let elapsedTime = 0;
  const count = useRef(0);
  
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = []
    text[c] = []
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 }
      text[c][r] = { x: 0, y: 0, status: 1 }
    }
  }

  const drawBall = (p5: any, ball_x: number, ball_y: number, b_ballRadius: number) => {
    p5.clear()
    p5.fill('#e6fff7')
    p5.arc(ball_x, ball_y, ballRadius, ballRadius, 0, Math.PI * 2)
  }

  const drawPaddle = (p5: any) => {
    p5.rect(paddleX.current, p5.height - paddleHeight, paddleWidth, paddleHeight)
    p5.fill('#f0f8ff')
  }

  const drawBricks = (p5: any) => {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        if (bricks[c][r].status === 1) {
          const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop
          bricks[c][r].x = brickX
          bricks[c][r].y = brickY
          p5.rect(brickX, brickY, brickWidth, brickHeight)
          p5.fill('#ffffff')
        }
      }
    }
  }

  const drawText = (p5: any) => {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        if (text[c][r].status === 1) {
          const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop
          text[c][r].x = brickX
          text[c][r].y = brickY
          p5.text('test', brickX, brickY, brickWidth, brickHeight)
          p5.textSize(35)
          p5.fill('#ff2828')
        }
      }
    }
  }

  const collisionDetection = () => {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        let b = bricks[c][r]
        let t = text[c][r]
        if (b.status == 1) {
          if (
            x.current > b.x &&
            x.current < b.x + brickWidth &&
            y.current > b.y &&
            y.current < b.y + brickHeight
          ) {
            dy = -dy
            b.status = 0
            t.status= 0
            score.current++
          }
        }
      }
    }
  }

  const drawlives = (p5: any) => {
    if(lives >= 2){
      p5.textSize(58);
      p5.textFont('Helvetica');
      p5.fill('#f0ffff')
      p5.text('前期', width/2.18, height/2)
    }

    else if(lives === 1){
      p5.textSize(35);
      p5.textFont('Helvetica');
      p5.fill('#4affed')
      p5.text('⚠️留年注意❗⚠️', width/2.45, height/1.7)
      
      p5.textSize(58);
      p5.textFont('Helvetica');
      p5.fill('##f0ffff')
      p5.text('後期', width/2.18, height/2)
    }
  }

  const gameOver = () => {
    alert('留年!!!!!!!!')
    router.push('/')
  }

  //タイマーの処理
  useEffect(() => {
    const id = setInterval(() => {
      count.current += 1;
    }, 1000);
    return () => clearInterval(id);
  }, [])

  const draw = (p5: any) => {
    p5.clear()
    drawBall(p5, x.current, y.current, ballRadius)
    drawPaddle(p5)
    drawlives(p5)
    collisionDetection()
    drawBricks(p5)
    drawText(p5)
    //drawSakura(width / 2, height / 2, 200) //花
    

    //p5.textSize(35);
    //p5.fill('#d6d982')
    //p5.text(count.current + '秒経過',width/2.16, height/2.4);

    //strokeWeight(1);//花
    //stroke(200);//花
    //line(width / 2, 0, width / 2, height);//花
    //line(0, height / 2, width, height / 2);//花

    //noFill();//花
    //strokeWeight(2);//花
    //stroke(200, 0, 0);//花
    //p5.drawSakura(p5, width / 2, height / 2, 130);//花
    
    if (y.current < 10) {
      dy = -dy
    }
    if (x.current + dx > width - ballRadius || x.current + dx < ballRadius) {
      dx = -dx
      if (y.current + dy < ballRadius) {
        dy = -dy
      }
    } else if (y.current + dy > height - ballRadius) {
      if (x.current + 12 > paddleX.current && x.current - 20 < paddleX.current + paddleWidth) {
        dy = -dy
      } else{
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
      if (paddleX.current <= width - ballRadius - paddleWidth) {
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
  }

  return <Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized} />
}

export default SketchComponent
