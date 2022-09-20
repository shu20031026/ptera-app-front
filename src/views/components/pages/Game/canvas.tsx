import React, { useEffect, useRef, memo, FC } from 'react';

type Props = {
  canvasWidth: number;
  canvasHeight: number;
  x: number;
  y: number;
  rectWidth: number;
  rectHeight: number;
};

export const Canvas: FC<Props> = ({
  canvasWidth,
  canvasHeight,
  x,
  y,
  rectWidth,
  rectHeight
}) => {
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
  const canvas: any = canvasRef.current;
  return canvas.getContext('2d');
};


  useEffect(() => {
    const ctx = getContext();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, rectWidth, rectHeight);
  }, [canvasWidth, canvasHeight, x, y, rectWidth, rectHeight]);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};
