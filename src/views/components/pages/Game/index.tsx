import type { NextPage } from "next";
import { game } from "./style";
import { Canvas } from "./canvas";

// gameページ
export const Game: NextPage = () => {
  return (
    <div css={game}>
      <p>game</p>
      <Canvas></Canvas>
      <p>test</p>
    </div>
  );
};
