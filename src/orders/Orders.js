import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

import Header from '../header/Header';
import { useStateValue } from '../StateProvider';
import Order from './Order';
import './Orders.css';

function Orders() {
    const[{user} ] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db
            .collection('users')
            .doc(user.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ));
        } else {
            setOrders([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

  return (
    <>
    <Header />
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders-container'>
            {orders?.map(order => (
                <Order order={order} key={order.created} />
            ))}
        </div>
    </div>
    </>
  )
}

export default Orders;