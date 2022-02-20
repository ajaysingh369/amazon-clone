import React from 'react';
import './Product.css';

function Product({key, title, price, image, rating}) {
  return (
    <div className='product' key={key}>
        <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {Array(rating).fill().map((_, i) =>(
                    <p> * </p>
  ))}
            </div>
        </div>
        <img src={image} alt='' />
        <button>Add to Basket</button>
    </div>
  )
}

export default Product