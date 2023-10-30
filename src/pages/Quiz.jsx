import Answers from "../components/Answers";
import ProgressBar from "../components/ProgressBar";
import MiniPlayer from "../components/MiniPlayer";
import useQuestions from "../hooks/useQuestions";
import {
    useNavigate,
    useParams,
} from "react-router-dom";
import { useEffect, useReducer, useRef, useState } from "react";
import _ from "lodash";
import { getDatabase, ref, set } from "firebase/database";
import { useAuth } from "../contexts/AuthContext";

const initialState = null;

const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false;
                });
            });
            return action.value;
        case "answer":
            // eslint-disable-next-line no-case-declarations
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionIndex].checked =
                action.value;
            return questions;
        default:
            return state;
    }
};

export default function Quiz() {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const { id } = useParams();
    const [qna, dispatch] = useReducer(reducer, initialState);
    const { loading, questions, error } = useQuestions(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const errorRef = useRef();
    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        });
    }, [questions]);
    const next = () => {
        let accessNextPage = false;
        qna[currentQuestion].options.forEach((option) => {
            if (option.checked) {
                accessNextPage = true;
            }
        });
        if (currentQuestion + 1 < questions.length && accessNextPage) {
            setCurrentQuestion((prev) => prev + 1);
            errorRef.current.style.opacity = 0;
        } else {
            errorRef.current.style.opacity = 1;
            setTimeout(() => {
                errorRef.current.style.opacity = 0;
            }, 3000);
        }
    };

    const prev = () => {
        if (currentQuestion > 0 && currentQuestion + 1 <= questions.length) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const handleAnswerChange = (e, index) => {
        dispatch({
            type: "answer",
            questionID: currentQuestion,
            optionIndex: index,
            value: e.target.checked,
        });
    };

    const submit = async () => {
        let accessNextPage = false;
        qna[currentQuestion].options.forEach((option) => {
            if (option.checked) {
                accessNextPage = true;
            }
        });
        if (accessNextPage) {
            const { uid } = currentUser;
            const db = getDatabase();
            const resultRef = ref(db, `result/${uid}`);

            await set(resultRef, {
                [id]: qna,
            });

            navigate(`/result/${id}`,{
                state: qna,
            });
        } else {
            errorRef.current.style.opacity = 1;
            setTimeout(() => {
                errorRef.current.style.opacity = 0;
            }, 3000);
        }
    };
    const progress = ((currentQuestion + 1) * 100) / questions.length;

    return (
        <>
            {loading && <div>Loading....</div>}
            {error && <div>Error....</div>}
            {!loading && !error && qna.length > 0 && (
                <>
                    <h1
                        className="error"
                        ref={errorRef}
                        style={{
                            justifyContent: "center",
                            opacity: 0,
                            cursor: "default",
                            userSelect: "none",
                        }}>
                        {"Submit at least one option"}
                    </h1>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers
                        input
                        options={qna[currentQuestion].options}
                        handler={handleAnswerChange}
                    />
                    <ProgressBar
                        next={next}
                        prev={prev}
                        progress={progress}
                        submit={submit}
                    />
                    <MiniPlayer id={id} />
                </>
            )}
        </>
    );
}
