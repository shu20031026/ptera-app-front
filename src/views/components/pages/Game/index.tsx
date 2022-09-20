import type { NextPage } from "next";
import { game } from "./style";
import p5 from "p5";
import SketchComponent from "./Sketch";

// gameページ
export const Game: NextPage = () => {
  return (
    <div css={game} id="canvas-parent">
      <p>game</p>
      <p>test</p>
      <SketchComponent/>
    </div>
  );
};
