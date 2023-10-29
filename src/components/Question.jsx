import classes from '../styles/Question.module.css'
import Answers from './Answers'


export default function Question({answers=[]}) {
  return answers.map(answer=>(
    <div className={classes.question} key={Math.random()}>
    <div className={classes.qtitle}>
      <span className="material-icons-outlined"> help_outline </span>
      {answer.title}
    </div>
    <Answers options={answer.options} input={false}/>
  </div>
  ))
}
