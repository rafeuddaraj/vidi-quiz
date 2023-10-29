import Checkbox from './Checkbox'
import classes from '../styles/Answer.module.css'

export default function Answers({options=[],handler}) {
  return (
    <div className={classes.answers}>
        {options.map((option,i)=>(
          <Checkbox key={Math.random()} className ={classes.answer} checked={option.checked}  text={option.title} onChange={(e)=>handler(e,i)}/>
        ))}
    </div>
  )
}
