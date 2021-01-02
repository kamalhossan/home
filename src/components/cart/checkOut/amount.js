import React from 'react';
import classes from './amount.module.css';

const amount = () => (
    <div className="col-lg-4">
        <div className={['card-body', classes.boxShadow].join(' ')}>
            <h5 className="card-title">The total amount of</h5>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Temporary amount
                    <span>$53.98</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Shipping
                    <span>Gratis</span>
                </li>
            </ul>
            <hr />
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <strong>The total amount of (including VAT)</strong>
                    <strong>
                        <span>$53.98</span>
                    </strong>
                </li>
            </ul>
            <button type="button" className="btn-block waves-effect waves-light btn btn-primary">
                Checkout
            </button>
        </div>
    </div>
);

export default amount;
