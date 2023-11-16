import { useState, useContext } from 'react'
import { UserContext } from '../../pages/_app'
import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {
  const handleLogOut = () => {
 
  }
  const [ loggedInUser, setLoggedInUser ] = useContext(UserContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Graph Draw</div>
      <nav>
        <h1></h1>
     
          {!loggedInUser &&
            <ul>
              <li>
                <Link href='/images'>My Images</Link>
              </li>
              <li>
                <Link href='/login'>Log In</Link>
              </li>
              <li>
                <Link href='/signup'>Sign Up</Link>
              </li>
            </ul>
          }
          {loggedInUser &&
            <ul>
              <button onClick={handleLogOut} >Log Out</button>.
            </ul>
          }
        
      </nav>
    </header>
  );
}

export default MainNavigation;
