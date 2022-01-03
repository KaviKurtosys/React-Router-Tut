import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const style = {
        color: 'white'
    };

  return (
    <nav className="nav">
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link style={style} to='/about'>
                <li>About</li>
            </Link>
            <Link style={style} to='/shop'>
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
