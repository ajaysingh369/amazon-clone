import React from 'react';
import { useStateValue } from '../StateProvider';
import './CartItem.css';

function CartItem({id, image, title, price, rating}) {
    
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        });
    }

  return (
    <div className='cart-item'>
        <img className='image' src={image} />
        <div className='info'>
            <p className='title'>{title}</p>
            <p className='price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='rating'>
            {Array(rating).fill().map((_, i) =>(
                    <p key={i}> * </p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CartItem