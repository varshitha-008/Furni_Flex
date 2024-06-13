// Navbar.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; // Adjust the import path as necessary
import Chairs from '../categories/Chairs';
import Curtain from '../categories/Curtain';
import Sofa from '../categories/Sofa';
import Wardropes from '../categories/Wardropes';
import Tables from '../categories/Tables';

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chairs">Chairs</Link></li>
          <li><Link to="/curtain">Curtain</Link></li>
          <li><Link to="/sofa">Sofa</Link></li>
          <li><Link to="/tables">Tables</Link></li>
          <li><Link to="/wardropes">Wardropes</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/curtain" element={<Curtain />} />
        <Route path="/sofa" element={<Sofa />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/wardropes" element={<Wardropes />} />
      </Routes>
    </div>
  );
}

export default Navbar;
