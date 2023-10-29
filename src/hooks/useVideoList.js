import {
    getDatabase,
    ref,
    query,
    startAt,
    limitToFirst,
    orderByKey,
    get,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchedVideos() {
            const db = getDatabase();
            const videoReference = ref(db, "videos");
            const videoQuery = query(videoReference, orderByKey(),startAt(String(page)),limitToFirst(8));

            try{
                setError(false)
                setLoading(true)
                const snapshot = await get(videoQuery)
                setLoading(false)

                if(snapshot.exists()){
                    setVideos(prevVideo=>[...prevVideo,...Object.values(snapshot.val())])
                }else{
                    setHasMore(false)
                }

            }
            catch(e){
                console.log(e);
                setLoading(false)
                setError(true)
            }
        }
        fetchedVideos()
    }, [page]);
    return {
        videos,
        loading,
        error,
        hasMore,
    };
}
