import React from 'react';
import classes from './cart.module.css';
import Checkout from './checkOut/checkOut';
import Handbag from './handbag/handbag';

const cart = () => (
    <div className={classes.cart_page}>
        <div className="container">
            <div className="row my-5">
                <Handbag />
                <Checkout />
            </div>
        </div>
    </div>
);

export default cart;
