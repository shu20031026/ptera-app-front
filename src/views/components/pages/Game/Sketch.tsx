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

  const draw = (p5: any) => {
    //ここにゲームの処理を描く
  };

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
