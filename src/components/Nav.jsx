import Account from './Account'
import classes from '../styles/Nav.module.css'
import logo from '../assets/images/logo-bg.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Nav() {
  return (
    <nav className={classes.nav}>
    <ul>
      <li>
        <Link to="/" className={classes.brand}>
          <img src={logo} alt="Learn with Sumit Logo" />
          <h3>Learn with Sumit</h3>
        </Link>
      </li>
    </ul>
    <Account/>
  </nav>

  )
}
