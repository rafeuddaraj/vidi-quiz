import {getDatabase,ref,orderByKey,query,get} from 'firebase/database'
import { useEffect, useState } from 'react'

export default function useAnswers(videoID){
    const [loading,setLoading] = useState(true)
    const [answers,setAnswers] = useState([])
    const [error,setError] =useState(false)

    useEffect(()=>{
        const fetchedAnswers = async()=>{
            const db = getDatabase()
            const answerReference = ref(db,`answers/${videoID}/questions`)
            const answersQuery = query(answerReference,orderByKey())

            try{
                setLoading(true)
                setError('')
                const snapshot = await get(answersQuery)
                if(snapshot.exists()){
                    setLoading(false)
                    setAnswers(prev=>[...prev,...Object.values(snapshot.val())])
                }
            }catch(e){
                console.log(e);
                setLoading(false)
                setError(true)
                setAnswers([])
            }
        }
        fetchedAnswers()
    },[videoID])

  return {
    loading,
    answers,
    error
  }
}
