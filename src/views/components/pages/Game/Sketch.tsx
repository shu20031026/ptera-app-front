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
    p5.noStroke()
  }

  const router = useRouter()
  const { width, height } = getWindowSize()
  const ballRadius = 10
  const x = useRef(50)
  const y = useRef(50)
  let dx = 2
  let dy = -2
  const paddleHeight = 10
  const paddleWidth = 75
  const paddleX = useRef((width - paddleWidth) / 2)
  let lives = 3
  let score = 0
  const brickRowCount = 3
  const brickColumnCount = 5
  const brickWidth = 75
  const brickHeight = 20
  const brickPadding = 10
  const brickOffsetTop = 30
  const brickOffsetLeft = 30
  let bricks: BricksArray[][] = []
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = []
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 }
    }
  }

  const drawBall = (p5: any, ball_x: number, ball_y: number, b_ballRadius: number) => {
    p5.clear()
    p5.fill(0, 0, 0)
    p5.arc(ball_x, ball_y, ballRadius, ballRadius, 0, Math.PI * 2)
  }

  const drawPaddle = (p5: any) => {
    p5.rect(paddleX.current, p5.height - paddleHeight, paddleWidth, paddleHeight)
    p5.fill('#0095DD')
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
          p5.fill('#0095DD')
        }
      }
    }
  }

  const collisionDetection = () => {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        let b = bricks[c][r]
        if (b.status == 1) {
          if (
            x.current > b.x &&
            x.current < b.x + brickWidth &&
            y.current > b.y &&
            y.current < b.y + brickHeight
          ) {
            dy = -dy
            b.status = 0
            score++
          }
        }
      }
    }
  }

  const gameOver = (p5: any) => {
    alert('GAME OVER')
    console.log(score)
    router.replace('/')
  }

  const draw = (p5: any) => {
    p5.clear()
    drawBall(p5, x.current, y.current, ballRadius)
    drawPaddle(p5)
    collisionDetection()
    drawBricks(p5)
    if (x.current + dx > width - ballRadius || x.current + dx < ballRadius) {
      dx = -dx
      if (y.current + dy < ballRadius) {
        dy = -dy
      }
    } else if (y.current + dy > height - ballRadius) {
      if (x.current > paddleX.current && x.current < paddleX.current + paddleWidth) {
        dy = -dy
      } else {
        lives--
        if (lives === 0) {
          gameOver(p5)
          p5.noLoop()
        }
      }
    }

    x.current += dx
    y.current += dy

    if (p5.keyIsDown(p5.LEFT_ARROW)) {
      paddleX.current -= 7
    } else if (p5.keyIsDown(p5.RIGHT_ARROW)) {
      paddleX.current += 7
    }
  }

  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />
}

export default SketchComponent
