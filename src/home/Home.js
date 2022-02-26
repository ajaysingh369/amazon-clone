import React from 'react';
import Product from './Product';
import Header from '../header/Header';
import './Home.css';

function Home() {
  return (
    <>
    <Header />
    <div className='home'>
        <div className='home-container'>
            <img className="home-image" src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt="" />
            <div className='home-row'>
                <Product key="4903845"
                    id="4903845"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price= {11.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating={5}
                />
                <Product key="4903846"
                    id="4903846"
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                    price= {239.0}
                    image='https://m.media-amazon.com/images/I/81tCWi0BusL._AC_UY218_.jpg'
                    rating={4}
                />
            </div>
            <div className='home-row'>
                <Product key="4903850"
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price= {199.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                    rating={3}
                />
                <Product key="4903851"
                    id="4903851"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price= {98.99}
                    image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_ret.jpg'
                    rating={5}
                />
                <Product key="4903852" 
                    id="4903852"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price= {598.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                    rating={4}
                />
            </div>
            <div className='home-row'>
                <Product key="4903853"
                     id="4903853"
                     title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                     price= {1094.98}
                     image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                     rating={3}
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home