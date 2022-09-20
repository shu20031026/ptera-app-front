import dynamic from 'next/dynamic'
import p5Types from 'p5'


const Sketch = dynamic(import('react-p5'), {
  ssr: false
})
const SketchComponent = () => {

  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.colorMode(p5.HSB, p5.width, p5.height, 100);
    p5.noStroke();
  };

  const width = document.body.clientWidth;
  const height = document.body.clientHeight;
  let ballRadius = 10;
  let x = width / 2;
  let y = height - 30;
  let dx = 2;
  let dy = -2;
  const paddleHeight = 10;
  const paddleWidth = 75;
  let paddleX = (width - paddleWidth) / 2;
  let lives = 3;

  const drawBall = (p5: any, dx: number, dy: number, b_ballRadius: number) => {
    p5.clear();
    p5.fill(255,255,255);
    p5.arc(dx, dy, ballRadius, ballRadius, 0, Math.PI * 2);
  }


  const draw = (p5: any) => {
    p5.clear();
    drawBall(p5, x, y, ballRadius);
    if(x + dx > width - ballRadius || x + dx < ballRadius){
      dx = -dx;
    }
    if(y + dy > height - ballRadius || y + dy < ballRadius){
      dy = -dy;
    }

    x += dx;
    y += dy;

  }

  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };


  return (
    <Sketch
       setup={setup}
       draw={draw}
       windowResized={windowResized}
     />
  )

};

export default SketchComponent;
