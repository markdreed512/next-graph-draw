import { useState, useContext } from 'react'
import { UserContext } from '../../pages/_app'
import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {
  const [ loggedInUser, setLoggedInUser ] = useContext(UserContext)
  const handleLogOut = async () => {
    const response = await fetch('/api/logout-user', {
      method: "PATCH",
      body: loggedInUser._id,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log("data: ", data.body)
  }
  

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
            <li onClick={handleLogOut}>Log Out</li>
          </ul>
        }
      </nav>
    </header>
  );
}

export default MainNavigation;
