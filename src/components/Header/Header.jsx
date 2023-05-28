import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <nav className='nav-container'>
          <div className="nav-wrapper">
            <Link to={`/`}>
              <h1 className='title'>Rick and Morty: Guess the characters</h1>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/guess">Let's play!</Link></li>
              <li><Link to="/answers">Show answers</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;