import React from 'react';
import { useStateValue } from './../StateProvider';
import './Product.css';

function Product({id, title, price, image, rating}) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  }
  
  return (
    <div className='product' key={id}>
        <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {Array(rating).fill().map((_, i) =>(
                    <p key={i}> * </p>
                ))}
            </div>
        </div>
        <img src={image} alt='' />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product