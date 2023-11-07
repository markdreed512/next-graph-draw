import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Graph Draw</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/images'>All Images</Link>
          </li>
          <li>
            <Link href='/upload-image'>Add Image</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
