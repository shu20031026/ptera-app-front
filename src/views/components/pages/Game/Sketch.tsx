import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { getWindowSize } from './GetWindowSize'

const Sketch = dynamic(import('react-p5'), {
  ssr: false,
})
const SketchComponent = () => {
  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    p5.colorMode(p5.HSB, p5.width, p5.height, 100)
    p5.noStroke()
  }

  const { width, height } = getWindowSize()
  let ballRadius = 10
  const x = useRef(50)
  const y = useRef(50)
  let dx = 2
  let dy = -2
  const paddleHeight = 10
  const paddleWidth = 75
  const paddleX = useRef((width - paddleWidth) / 2)
  let lives = 3

  const drawBall = (p5: any, ball_x: number, ball_y: number, b_ballRadius: number) => {
    console.log(ball_x, ball_y)
    p5.clear()
    p5.fill(255, 255, 255)
    p5.arc(ball_x, ball_y, ballRadius, ballRadius, 0, Math.PI * 2)
  }

  const drawPaddle = (p5: any) => {
    p5.rect(paddleX.current, p5.height - paddleHeight, paddleWidth, paddleHeight)
    p5.fill('#0095DD')
  }

  const draw = (p5: any) => {
    p5.clear()
    drawBall(p5, x.current, y.current, ballRadius)
    drawPaddle(p5)
    if (x.current + dx > width - ballRadius || x.current + dx < ballRadius) {
      dx = -dx
    }
    if (y.current + dy > height - ballRadius || y.current + dy < ballRadius) {
      dy = -dy
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
