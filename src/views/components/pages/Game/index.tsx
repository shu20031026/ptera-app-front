import type { NextPage } from "next";
import { game } from "./style";
// gameページ
export const Game: NextPage = () => {
  return (
    <div css={game}>
      <h1>ゲーム作るドン！！</h1>
      <a href="https://app.slack.com/client/TVDAMQ0FM/C03UUAFTE3E">Slackのリンク</a>
      <p>game</p>
    </div>
  );
};
