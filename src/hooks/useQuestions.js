import { getDatabase, ref, get, query, orderByKey } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchedQuestions() {
            const db = getDatabase();
            const quizReference = ref(db, `quiz/${videoID}/questions`);
            const quizQuery = query(quizReference, orderByKey());

            try {
                setLoading(true);
                setError(false);
                const snapshot = await get(quizQuery);
                if (snapshot.exists()) {
                    setQuestions(prevQuestion=>[...prevQuestion,...Object.values(snapshot.val())]);
                    setLoading(false);
                }
            } catch (err) {
                console.log(err);
                setLoading(false)
                setError(true)
            }
        }

        fetchedQuestions();
    }, [videoID]);

    return {
        loading,
        questions,
        error,
    };
}
