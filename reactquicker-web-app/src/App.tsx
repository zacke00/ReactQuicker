import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <main className='app-container'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
