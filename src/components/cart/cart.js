import React from 'react';
import Amount from './amount/amount';
import classes from './cart.module.css';
import Handbag from './handbag/handbag';

const cart = () => (
    <div className={classes.cart_page}>
        <div className="container">
            <div className="row my-5">
                <Handbag />
                <Amount />
            </div>
        </div>
    </div>
);

export default cart;
