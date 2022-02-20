import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './CartTotal.css';
import { useStateValue } from '../StateProvider';
import { TotalCartValue } from './../reducer';

function CartTotal() {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='cart-total'>
        <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal ({basket?.length} items):
                <strong>{` ${value}`}</strong>
            </p>
            <small className='cart-total-gift'>
                <input type="checkbox" />This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={TotalCartValue(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default CartTotal