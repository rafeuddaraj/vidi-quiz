import classes from '../styles/Summary.module.css'
import defaultImage from '../assets/images/success.png'
import useFetch from '../hooks/useFetch'

export default function Summary({score,noq}) {

  const getKeyword = ()=>{
    const point = score / (noq * 5) * 100 
    if(point < 50) return 'Failed'
    else if(point < 75)return 'Good'
    else if(point < 100) return 'Very Good'
    else return 'Excellent'
  }

  const url = `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`
  const header = {
    Authorization:import.meta.env.VITE_PIXELS_API
  }
  const {loading,error,result} = useFetch(url,'GET',header)

  const image = !loading && !error ? result.photos[0].src.large : defaultImage

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
      {loading && <p>Loading...</p>}
      {error && <p>There was an problem...</p>}
      {!loading && !error &&  <img src={image} alt="Success" />}
    </div>
  </div>
  )
}
