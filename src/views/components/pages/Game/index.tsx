import type { NextPage } from "next";
import { game } from "./style";
import SketchComponent from "./Sketch";

// gameページ
export const Game: NextPage = () => {
  return (
    <div css={game} id="canvas-parent">
      <SketchComponent/>
    </div>
  );
};
