import classes from './MainNavigation.module.css';
import Link from 'next/link'
// import { useSelector, useDispatch } from 'react-redux'

function MainNavigation() {
  // const isLoggedIn = useSelector(state => state.isLoggedIn)
  // console.log("isLoggedIn:", isLoggedIn)
  // const dispatch = useDispatch()
  const handleLogOut = () => {
    // Left off here: 
    // need to dispatch logout
    // dispatch({type: "LOGOUT"})
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Graph Draw</div>
      <nav>
        <h1></h1>
        <li>
                <Link href='/login'>Log In</Link>
              </li>
          {/* {!isLoggedIn.isLoggedIn &&
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
          {isLoggedIn.isLoggedIn &&
            <ul>
              <button onClick={handleLogOut} >Log Out</button>.
            </ul>
          } */}
        
      </nav>
    </header>
  );
}

export default MainNavigation;
