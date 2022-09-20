import type { NextApiRequest, NextApiResponse } from "next";
const { initializeApp } = require('firebase-admin/app');
const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
import * as admin from 'firebase-admin';
import serviceAccount from 'ptera-cup-firebase-adminsdk-nscv8-b5fffc69d3.json';
import { database } from "firebase-admin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: cert(serviceAccount),
    });
  }
  
  const db = getFirestore();
  
  if (req.method === 'GET'){
    const dummyRanking: any = [
      {
        name: 'よーくん',
        score: 100,
        droppedUnit: 1,
        unit: ['微積'],
        id: 1
      },
      {
        name: 'よーくん',
        score: 50,
        droppedUnit: 2,
        unit: ['微積','物理'],
        id: 2
      }
    ];

    res.status(200).json(dummyRanking);
  }
  res.status(200);
}
