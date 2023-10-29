import Answers from "../components/Answers";
import ProgressBar from "../components/ProgressBar";
import MiniPlayer from "../components/MiniPlayer";
import useQuestions from "../hooks/useQuestions";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useReducer, useState } from "react";
import _ from 'lodash'
import { getDatabase, ref, set } from "firebase/database";
import {useAuth} from '../contexts/AuthContext'

const initialState = null


const reducer = (state,action)=>{
    switch(action.type){
        case 'questions':
            action.value.forEach(question=>{
                question.options.forEach(option=>{
                    option.checked = false
                })
            })
            return action.value
        case 'answer':
            // eslint-disable-next-line no-case-declarations
            const questions = _.cloneDeep(state)
            questions[action.questionID].options[action.optionIndex].checked = action.value
            return questions
        default:
            return state
    }
}



export default function Quiz() {
    const history = useHistory()
    const {currentUser} = useAuth()
    const { id } = useParams();
    const [qna,dispatch] = useReducer(reducer,initialState)
    const { loading, questions, error } = useQuestions(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    useEffect(()=>{
        dispatch({
            type:'questions',
            value:questions
        })
    },[questions])
    const next = ()=>{
        if(currentQuestion + 1 < questions.length){
            setCurrentQuestion(prev=>prev+1)
        }
    }

    const prev = ()=>{
        if(currentQuestion > 0 && currentQuestion + 1 <= questions.length){
            setCurrentQuestion(prev=>prev-1)
        }
    }

    const handleAnswerChange = (e,index)=>{
        dispatch({
            type:'answer',
            questionID: currentQuestion,
            optionIndex:index,
            value: e.target.checked
        })
    }

    const submit = async()=>{
        const {uid} = currentUser
        const db = getDatabase()
        const resultRef = ref(db,`result/${uid}`)

        await set(resultRef,{
            [id]:qna
        })

        history.push({
            pathname:`/result/${id}`,
            state:{
                qna
            }
        })

    }
    const progress = ((currentQuestion + 1) * 100) / questions.length
    
    return (
        <>
            {loading && <div>Loading....</div>}
            {error && <div>Error....</div>}
            {!loading && !error && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers input options = {qna[currentQuestion].options} handler={handleAnswerChange}/>
                    <ProgressBar next={next} prev={prev} progress={progress} submit={submit}/>
                    <MiniPlayer id={id} title={qna[currentQuestion].title} />
                </>
            )}
        </>
    );
}
