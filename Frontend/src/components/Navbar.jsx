import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Box, Flex, Heading, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from './Home'; 
import Chairs from '../categories/Chairs';
import Curtain from '../categories/Curtain';
import Sofa from '../categories/Sofa';
import Wardropes from '../categories/Wardropes';
import Tables from '../categories/Tables';
import Login from './Login';
import SignUp from './SignUp';
import logo from "../assets/Furni_FLex_logo.png";
import serchicon from '../assets/search_icon.png';
 import '../styles/navbar.css'
 import { FaCartShopping } from "react-icons/fa6";
 import { FaHeart } from "react-icons/fa";
 import { CgProfile } from "react-icons/cg";
import loginprofile from '../assets/loginprofile.png'

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
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

  return (
    <Box  w='100%' p={4} color='white'>
      <div className='navbar'>
      <Flex justifyContent="space-between" alignItems="center" px={8} py={4} gap={10}>
        <img className='navbar-logo' src={logo} alt="logo" style={{ width: '150px' }} />
        
        
        <nav className='navbar-router' >
          <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center' }}>
            <li><Link to="/" style={linkStyle} onClick={() => navigateAndCloseForms('/')}>Home</Link></li>
            <li><Link to="/chairs" style={linkStyle} onClick={() => navigateAndCloseForms('/chairs')}>Chairs</Link></li>
            <li><Link to="/curtain" style={linkStyle} onClick={() => navigateAndCloseForms('/curtain')}>Curtain</Link></li>
            <li><Link to="/sofa" style={linkStyle} onClick={() => navigateAndCloseForms('/sofa')}>Sofa</Link></li>
            <li><Link to="/tables" style={linkStyle} onClick={() => navigateAndCloseForms('/tables')}>Tables</Link></li>
            <li><Link to="/wardropes" style={linkStyle} onClick={() => navigateAndCloseForms('/wardropes')}>Wardrobes</Link></li>
            </ul>
        </nav>
            {/* serching icon */}

      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={serchicon} alt="Search Icon"/>

      </div>

      {/* ... */}
            {user ? (
          <li style={linkStyle} ><Button variant="link" onClick={handleLogout} color="black" _hover={{ textDecoration: 'underline' }}>Logout</Button></li>
            ) : (
              <>
                <li style={linkStyle }  >
                  <Button  bg='black' style={{display:"inline-block",border:"none"}} variant="link" onClick={toggleLoginForm} color="black" _hover={{ textDecoration: 'underline' }}>
                  <img width='40px' src={loginprofile} alt="" />
                   <p style={{color:"white", marginBottom:"-10px"}} >login</p>
                  </Button>
                </li>
                {/* <li>
                  <Button variant="link" onClick={toggleSignUpForm} color="black" _hover={{ textDecoration: 'underline' }}>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </Button>
                </li> */}
              </>
            )}
            <div className='navbar-icons' >
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

export default Navbar;
