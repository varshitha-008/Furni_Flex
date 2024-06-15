// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/chairs">Chairs</Link></li>
        <li><Link to="/curtains">Curtains</Link></li>
        <li><Link to="/sofas">Sofas</Link></li>
        <li><Link to="/tables">Tables</Link></li>
        <li><Link to="/wardrobes">Wardrobes</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
