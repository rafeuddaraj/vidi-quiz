import Summary from "../components/Summary";
import Analysis from "../components/Analysis";
import Button from "../components/Button";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../hooks/useAnswers";
import _ from "lodash";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Result() {
    const { state } = useLocation();
    const { id } = useParams();
    const history = useHistory()
    const { loading, answers, error } = useAnswers(id);
    const { qna } = state;

    const calculate = () => {
        let score = 0;

        answers.forEach((question, index1) => {
            const checkedIndexes = [],
                correctIndexes = [];

            question.options.forEach((option, index2) => {
                if (option.correct) {
                    correctIndexes.push(index2);
                }
                if (qna[index1].options[index2].checked) {
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            });

            if (_.isEqual(checkedIndexes, correctIndexes)) {
                score += 5;
            }
        });

        return score;
    };

    const userScore = calculate();

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {answers.length > 0 && (
                <>
                    <Summary score={userScore} noq={answers.length} />
                    <Analysis
                        score={userScore}
                        noq={answers.length}
                        answers={answers}
                    />
                    <div className={"center"}>
                        <Button onClick={()=>{
                            history.push('/')
                        }}>Return Home</Button>
                    </div>
                </>
            )}
        </>
    );
}
