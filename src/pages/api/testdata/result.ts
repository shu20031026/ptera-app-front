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
  if (req.method === 'POST'){
    res.status(200).json(["success"]);
  } else {
    res.status(200).json(["success"]);
  }
  res.status(200);
}
