import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Header from '../header/Header';
import { useStateValue } from '../StateProvider';
import './Orders.css';

function Orders() {
    const[{basket, user}, dispatch ] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        } else {
            setOrders([]);
        }
    }, [])
  return (
    <>
    <Header />
    <div className='orders'>
        <h1>Your Orders</h1>
    </div>
    </>
  )
}

export default Orders