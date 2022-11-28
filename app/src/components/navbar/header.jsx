import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import "./navbar.css";

export const Header = () => {
  return (
    <div className='mainContainer'>
        <div className='navContainer'>
        <Link to="/" className="link" id="logo"><em>dribbble</em></Link>
        <Navbar/>
        </div>
        <div>
            <ul className='navContainer'>
            <li><Link to='/search' className="link"><img className="image" src="https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png" alt="searchicon" /></Link></li>
              <li><Link to='/login' className="link">Sign In</Link></li>
              <li><Link to='/register' className="link" id='signup'>Sign Up</Link></li>
            </ul>
        </div>
    </div>
  )
}
