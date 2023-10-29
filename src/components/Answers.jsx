import Checkbox from './Checkbox'
import classes from '../styles/Answer.module.css'

export default function Answers({options=[],handler,input}) {
  return input ? (
    (
      <div className={classes.answers}>
          {options.map((option,i)=>(
            <Checkbox key={Math.random()} className ={classes.answer} checked={option.checked}  text={option.title} onChange={(e)=>handler(e,i)}/>
          ))}
      </div>
    )
  ) : (
    <div className={classes.answers}>
          {options.map((option)=>(
            <Checkbox key={Math.random()} className ={`${classes.answer} ${option.correct ? (classes.correct) : option.checked && classes.wrong}`} defaultChecked={option.checked} disabled  text={option.title}/>
          ))}
      </div>
  )
}
