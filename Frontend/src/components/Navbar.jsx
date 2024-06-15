import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';
import Home from './Home';
import Chairs from '../categories/Chairs';
import Curtain from '../categories/Curtain';
import Sofa from '../categories/Sofa';
import Wardropes from '../categories/Wardropes';

import Tables from '../categories/Tables';
import Login from './Login';
import SignUp from './SignUp';
import logo from "../assets/Furni_FLex_logo.png";
import searchIcon from '../assets/search_icon.png';
import '../styles/navbar.css';
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import loginProfile from '../assets/loginprofile.png';

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [user, setUser] = useState(null);
  const [data, setData] = useState({});
  
  const [subcategories, setSubcategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Fetch data from APIs
    const fetchData = async () => {
      try {
        const [sofa, curtain, tables, wardrobes, chairs] = await Promise.all([
          fetch('https://furni-flex-4-yx74.onrender.com/sofa').then(res => res.json()),
          fetch('https://furni-flex-4-yx74.onrender.com/curtains').then(res => res.json()),
          fetch('https://furni-flex-4-yx74.onrender.com/tables').then(res => res.json()),
          fetch('https://furni-flex-4-yx74.onrender.com/wardrops').then(res => res.json()),
          fetch('https://furni-flex-4-yx74.onrender.com/chairs').then(res => res.json())
        ]);
        setData({ sofa, curtain, tables, wardrobes, chairs });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(false); 
    navigate('/login');
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowLoginForm(false); 
    navigate('/signup');
  };

  const navigateAndCloseForms = (path) => {
    setShowLoginForm(false);
    setShowSignUpForm(false);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const query = event.target.value;
      navigate(`/search?query=${query}`);
    }
  };

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
    if (data[category]) {
      const uniqueSubcategories = [...new Set(data[category].map(item => item.subcategory))];
      setSubcategories(uniqueSubcategories);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setSubcategories([]);
  };

  return (
    <Box w='100%' p={4} color='white'>
      <div className='navbar'>
        <Flex justifyContent="space-between" alignItems="center" px={8} py={4} gap={10}>
          <img className='navbar-logo' src={logo} alt="logo" style={{ width: '150px' }} />

          <nav className='navbar-router'>
            <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center' }}>
              <li>
                <Link to="/" style={linkStyle} onClick={() => navigateAndCloseForms('/')}>Home</Link>
              </li>
              <li onMouseEnter={() => handleMouseEnter('chairs')} onMouseLeave={handleMouseLeave}>
                <Link to="/chairs" style={linkStyle} onClick={() => navigateAndCloseForms('/chairs')}>Chairs</Link>
                {hoveredCategory === 'chairs' && (
                  <ul style={subMenuStyle}>
                    {subcategories.map(subcategory => (
                      <li key={subcategory} style={subLinkStyle}>{subcategory}</li>
                    ))}
                  </ul>
                )}
              </li>
              <li onMouseEnter={() => handleMouseEnter('curtain')} onMouseLeave={handleMouseLeave}>
                <Link to="/curtain" style={linkStyle} onClick={() => navigateAndCloseForms('/curtain')}>Curtain</Link>
                {hoveredCategory === 'curtain' && (
                  <ul style={subMenuStyle}>
                    {subcategories.map(subcategory => (
                      <li key={subcategory} style={subLinkStyle}>{subcategory}</li>
                    ))}
                  </ul>
                )}
              </li>
              <li onMouseEnter={() => handleMouseEnter('sofa')} onMouseLeave={handleMouseLeave}>
                <Link to="/sofa" style={linkStyle} onClick={() => navigateAndCloseForms('/sofa')}>Sofa</Link>
                {hoveredCategory === 'sofa' && (
                  <ul style={subMenuStyle}>
                    {subcategories.map(subcategory => (
                      <li key={subcategory} style={subLinkStyle}>{subcategory}</li>
                    ))}
                  </ul>
                )}
              </li>
              <li onMouseEnter={() => handleMouseEnter('tables')} onMouseLeave={handleMouseLeave}>
                <Link to="/tables" style={linkStyle} onClick={() => navigateAndCloseForms('/tables')}>Tables</Link>
                {hoveredCategory === 'tables' && (
                  <ul style={subMenuStyle}>
                    {subcategories.map(subcategory => (
                      <li key={subcategory} style={subLinkStyle}>{subcategory}</li>
                    ))}
                  </ul>
                )}
              </li>
              <li onMouseEnter={() => handleMouseEnter('wardrobes')} onMouseLeave={handleMouseLeave}>
                <Link to="/wardrobes" style={linkStyle} onClick={() => navigateAndCloseForms('/wardropes')}>Wardrobes</Link>
                {hoveredCategory === 'wardrobes' && (
                  <ul style={subMenuStyle}>
                    {subcategories.map(subcategory => (
                      <li key={subcategory} style={subLinkStyle}>{subcategory}</li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          <div className='search-box'>
            <input type="text" placeholder='Search' onKeyDown={handleSearch} />
            <img src={searchIcon} alt="Search Icon"/>
          </div>

          {user ? (
            <li  style={linkStyle}>
              <Button bg='black' style={{display:"inline-block",border:"none"}} variant="link" onClick={handleLogout} color="black" _hover={{ textDecoration: 'underline' }}>
              <img width='40px' src={loginProfile} alt="" />
              <p style={{color:"white", marginBottom:"-10px"}}>logout</p>
                </Button></li>
          ) : (
            <>
              <li style={linkStyle}>
                <Button bg='black' style={{display:"inline-block",border:"none"}} variant="link" onClick={toggleLoginForm} color="black" _hover={{ textDecoration: 'underline' }}>
                  <img width='40px' src={loginProfile} alt="" />
                  <p style={{color:"white", marginBottom:"-10px"}}>login</p>
                </Button>
              </li>
            </>
          )}
          <div className='navbar-icons'>
            <FaCartShopping />
            <FaHeart />
          </div>
        </Flex>
      </div>

      <Box mt={4} px={8}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chairs" element={<Chairs />} />
          <Route path="/curtain" element={<Curtain />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/wardropes" element={<Wardropes />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
        </Routes>
      </Box>
    </Box>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginRight: '10px',
  
  _hover: {
    textDecoration: 'underline',
  },
};

const subMenuStyle = {

  position: 'absolute',
  backgroundColor: 'wheat',
  listStyleType: 'none',
  padding: '10px',
  margin: '0',
  display: 'block',
  zIndex: 1,
};

const subLinkStyle = {
  color: 'black',
  textDecoration: 'none',
  padding: '5px 10px',
  display: 'block',
};

export default Navbar;
