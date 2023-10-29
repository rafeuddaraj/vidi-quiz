import classes from '../styles/Summary.module.css'
import image from '../assets/images/success.png'


export default function Summary({score,noq}) {
  return (
    <div className={classes.summary}>
    <div className={classes.point}>
      {/* <!-- progress bar will be placed here --> */}
      <p className={classes.score}>
        Your score is <br />
        {score} out of {noq * 5}
      </p>
    </div>

    <div className={classes.badge}>
      <img src={image} alt="Success" />
    </div>
  </div>
  )
}
