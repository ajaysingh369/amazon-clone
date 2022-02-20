import React from 'react';
import Header from '../header/Header';
import { useStateValue } from '../StateProvider';
import './Cart.css';
import CartTotal from './CartTotal';
import CartItem from './CartItem';

function Cart() {
    const [{basket}, dispatch] = useStateValue();
    
    return (
        <>
            <Header />
            <div className='cart'>
                <div className='cart-left'>
                    <img className='cart-ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' />
                    <div>
                        <h2 className='cart-title'>Your shopping Basket</h2>
                        {basket.map(item => (
                            <CartItem key ={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                        {/* CartItem */}
                    </div>
                </div>
                <div className='cart-right'>
                    <CartTotal />
                </div>
            </div>
        </>
  )
}

export default Cart;