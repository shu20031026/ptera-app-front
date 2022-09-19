import type { NextPage } from "next";
import { home } from "./style";

// homeページ
export const Home: NextPage = () => {
  return (
    <div css={home}>
      <p>home</p>
    </div>
  );
};
