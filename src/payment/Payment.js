import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CartItem from '../cart/CartItem';
import Header from '../header/Header';
import { useStateValue } from '../StateProvider';
import { TotalCartValue } from '../reducer';
import './Payment.css';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const getClientSecret = async () => {
            const response = axios
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    return (
        <>
            <Header />
            <div className='payment'>
                <div className='payment-container'>
                    <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
                    <div className='payment-section'>
                        <div className='title'>
                            <h3>Delivery Address</h3>
                        </div>
                        <div className='address'>
                            <p>{user.email}</p>
                            <p>Ka-303, RBI Colony</p>
                            <p>Kidwai Nagar, Kanpur</p>
                        </div>
                    </div>
                    <div className='payment-section'>
                        <div className='title'>
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className='payment-items'>
                            {basket.map(item => (
                                <CartItem key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='payment-section'>
                        <div className='title'>
                            <h3>Payment Method</h3>
                        </div>
                        <div className='payment-details'>
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className='payemnt-price-container'>
                                    <CurrencyFormat
                                    renderText={(value) => (
                                        <><h3>Order Total: {value}</h3></>
                                    )}
                                    decimalScale={2}
                                    value={TotalCartValue(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing..</p> : "Buy Now"}</span>
                                    </button>
                                </div>
                                <div>{error}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment