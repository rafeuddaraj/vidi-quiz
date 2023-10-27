import Checkbox from './Checkbox'
import classes from '../styles/Answer.module.css'

export default function Answer() {
  return (
    <div className="answers">
        <Checkbox className ={classes.answer} text={"Test Answer"}/>
    </div>
  )
}
