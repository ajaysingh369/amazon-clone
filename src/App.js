import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {auth } from "./firebase";

import './App.css';

import Home from './home/Home';
import Cart from './cart/Cart';
import Login from './login/Login';

function App() {

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {})
  });
  return (
    <Router>
      <div className="app">
      
        <Routes>
        <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />          
          <Route path='/checkout' element={<Cart />} />        
        </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
