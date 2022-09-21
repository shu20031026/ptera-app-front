import { addDoc, collection, getDocs, query, orderBy } from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore'
import { db } from '@/constant/firebase'
import { ResultType } from '@/constant/type'

const COLLECTION_NAME = 'koji-ranjer'

export const fetchData = async () => {
  const sortDb = query(collection(db, COLLECTION_NAME), orderBy('score', 'desc'))
  const querySnapshot = await getDocs(sortDb)
  const result: DocumentData[] = []
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data())
    result.push(doc.data())
  })
  return result
}

export const putData = async (result: ResultType) => {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), result)
  console.log(docRef)
}
