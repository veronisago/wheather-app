import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.navBar}>
      <div>
        <h3>logo</h3>
      </div>
      <div className={styles.navBarSections}>
        <Link to='/home'>
          <h4>Home</h4>
        </Link>
        <h4>About</h4>
        <Link to='/favourites'>
          <h4>Favourites</h4>
        </Link>
      </div>
    </div>
  )
}

export default Nav