import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {auth } from "./firebase";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


import './App.css';

import Home from './home/Home';
import Cart from './cart/Cart';
import Login from './login/Login';
import { useStateValue } from './StateProvider';
import Payment from './payment/Payment';

const promise = loadStripe("pk_test_51KVhQjSAfV4immPk8R3ftELEFgXSv1NQBMAgsj6XnOmRnGzYuh3vRUlEMEislSC5YhLuznl0w39gVIbx6zTbrxer001zgTPonz");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
  }, []);

  
  return (
    <Router>
      <div className="app">
      
        <Routes>
        <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />          
          <Route path='/checkout' element={<Cart />} />
          <Route path='/payment' element={<Elements stripe={promise}><Payment /></Elements>} />    
        </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
