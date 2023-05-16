import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/my-games">My Games</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
        <Link to="/GameShop">Game Shop</Link>
        </li>
      </ul>
    </nav>
  );
}

// This implementation heavily inspired by https://www.w3schools.com/react/react_router.asp