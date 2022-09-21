import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { getWindowSize } from './GetWindowSize'

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
    //p5.noStroke()
    p5.background('transparent');
  }

  const preload = (p5: any) => {
    mugiwaraImg = p5.loadImage('mugiwarabouhi.png')
  }

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
    p5.image(mugiwaraImg, ball_x, ball_y, 45, 45)
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
          p5.fill('#f0f8ff')
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
          p5.textSize(28)
          p5.fill('#660066')
        }
      }
    }
  }

  const drawlives = (p5: any) => {
    p5.textSize(30);
    p5.fill('#d5ffcc')
    p5.text(score.current,width/2.05,height/1.5);


    if(lives >= 2){
      p5.textSize(60);
      p5.fill('#ffe6ed')
      p5.text('前期', width/2.18, height/2)
    }

    else if(lives === 1){
      p5.textSize(60);
      p5.fill('#e5ccff')
      p5.text('後期', width/2.18, height/2)
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
            t.status = 0
            score.current++
          }
        }
      }
    }
  }

  const gameOver = () => {
    alert('留年!!!!!!!!')
    console.log(score.current)
    router.replace('/')
  }

  const draw = (p5: any) => {
    p5.clear()
    drawBall(p5, x.current, y.current, ballRadius)
    drawPaddle(p5)
    collisionDetection()
    drawBricks(p5)
    drawText(p5)
    drawlives(p5)
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
          gameOver()
          p5.noLoop()
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

  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }

  return <Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized} />
}

export default SketchComponent
