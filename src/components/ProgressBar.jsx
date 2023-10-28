import classes from '../styles/ProgressBar.module.css'
import Button from './Button'
import {Link} from 'react-router-dom'

export default function ProgressBar() {
  return (
    <div className={classes.progressBar}>
    <div className={classes.backButton}>
      <span className="material-icons-outlined"> arrow_back </span>
    </div>
    <div className={classes.rangeArea}>
      <div className={classes.tooltip}>24% Complete!</div>
      <div className={classes.rangeBody}>
        <div className={classes.progress} style={{width: "20%"}}></div>
      </div>
    </div>
    <Link to="/result">
        <Button className={classes.next}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
    </Link>
  </div>
  )
}
