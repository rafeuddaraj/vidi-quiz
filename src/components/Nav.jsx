import Account from './Account'
import classes from '../styles/Nav.module.css'
import logo from '../assets/images/logo-bg.png'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={classes.nav}>
    <ul>
      <li>
        <Link to="/" className={classes.brand}>
          <img src={logo} alt="VidiQuiz Logo" title='VidiQuiz' />
          <h3 title='VidiQuiz'>VidiQuiz</h3>
        </Link>
      </li>
    </ul>
    <Account/>
  </nav>

  )
}
