import type { NextPage } from "next";
import { ranking } from "./style";
// rankingページ
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/utils/firebase";

const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "koji-ranjer"))
  const result: DocumentData[] = []
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    result.push(doc.data())
  });
  return result
}

export const Ranking: NextPage = () => {
  const [result,setResult] = useState<DocumentData[]>([])

  useEffect(() => {
    (async ()=>{
      const data = await fetchData();
      console.debug(data)
      setResult(data)
    })()
  },[])

  return (
    <div css={ranking}>
      <p>ranking</p>
      <ul>
        {result.map((doc, i) => <li key={i}>{doc.unit}</li>)}
      </ul>
    </div>
  );
};
