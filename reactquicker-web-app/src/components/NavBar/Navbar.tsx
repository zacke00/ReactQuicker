import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Hamburger } from '../hamburger/hamburger';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Hamburger onClick={toggleMenu} isInitiallyOpen={isOpen} />
      <ul className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;