import type { NextApiRequest, NextApiResponse } from 'next'
const { initializeApp } = require('firebase-admin/app')
const { cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
import * as admin from 'firebase-admin'
import serviceAccount from 'ptera-cup-firebase-adminsdk-nscv8-b5fffc69d3.json'
import { database } from 'firebase-admin'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount),
    })
  }

  const db = getFirestore()

  if (req.method === 'POST') {
    const docDef = db.collection('ptera-cup').dec()

    const data = {
      name: req.body.name,
      unit: req.body.unit,
      droppedUnit: req.body.droppedUnit,
      id: req.body.id,
      score: req.body.score,
    }
    docDef.set(data)
  }
  res.status(200)
}
