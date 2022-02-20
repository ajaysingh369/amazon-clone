import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
        <Link to="/">
        <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='' />
        </Link>
        
        <div className='header-search'>
            <input className='header-search-input' type="text" />
            <SearchIcon className='header-search-icon' />
        </div>
        <div className='header-nav'>
            <div className='header-option'>
                <span className='header-option-line-one'>Hello Guest</span>
                <span className='header-option-line-two'>Sign In</span>
            </div>

            <div className='header-option'>
              <span className='header-option-line-one'>Returns</span>
              <span className='header-option-line-two'>& Orders</span>
            </div>
            <div className='header-option'>
              <span className='header-option-line-one'>Your</span>
              <span className='header-option-line-two'>Prime</span>
            </div>
            <Link to="/checkout">
              <div className='header-option-basket'>
                <ShoppingBasketIcon />
                  <span className='header-option-line-two header-basket-count'>{basket?.length}</span>
              </div>
            </Link>
            
        </div>
      </div>
  )
}

export default Header