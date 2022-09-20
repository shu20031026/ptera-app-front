import type { NextApiRequest, NextApiResponse } from "next";
// const { initializeApp } = require('firebase-admin/app');
// const { cert } = require('firebase-admin/app');
import { collection, doc, getFirestore, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

  
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);

const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db,"koji-ranjer"))
  const data = querySnapshot.docs.map((doc) => {
    return doc.data()
  })
  return data
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  if (req.method === 'GET'){
    try{
      const data = await fetchData()
      res.status(200).json({data:"s"});
    }catch(e){
      console.error(e)
    }
  }
  res.status(200);
}
