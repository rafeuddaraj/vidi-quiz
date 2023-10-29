
import Question from './Question'
import classes from '../styles/Analysis.module.css'

export default function Analysis({score,noq,answers}) {
  return (
    <div className={classes.analysis}>
        <h1>Question Analysis</h1>
          <h4>You answered {score/5} out of {noq} questions correctly</h4>
          <Question answers={answers}/>
    </div>
  )
}
