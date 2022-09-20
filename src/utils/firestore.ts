import type { DocumentData } from 'firebase/firestore'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/constant/firebase'

export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, 'koji-ranjer'))
  const result: DocumentData[] = []
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data())
    result.push(doc.data())
  })
  return result
}
