import { useEffect, useState } from "react"

export default function useFetch(url, method, header) {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState()
    const [error, setError] = useState(false)
    useEffect(()=>{
        const requestFetch = async () => {
            setLoading(true)
            setError('')
            try {
                const response = await fetch(url, {
                    method: method || 'GET',
                    headers: header
                })
                const data = await response.json()
                setResult(data)
                setLoading(false)
            } catch {
                setLoading(false)
                setError(true)
            }
        }
        requestFetch()
    },[])
    return {
        loading, error, result
    }
}
