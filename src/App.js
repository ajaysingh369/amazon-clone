import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './home/Home';
import Cart from './cart/Cart';

function App() {
  return (
    <Router>
      <div className="app">
      
        <Routes>
          <Route path='/' element={<Home />} />          
          <Route path='/checkout' element={<Cart />} />        
        </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
