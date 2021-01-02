import React from 'react';
import classes from './topbar.module.css';

const topbar = () => (
    <div className={['d-none d-lg-block', classes.topbar].join(' ')}>
        <div className="container">
            <div className={['row', classes.topbar_row].join(' ')}>
                <div className="col-md-6">
                    <div className="quick_links">
                        <ul className={['d-flex', classes.left].join(' ')}>
                            <li className={classes.contact_icons}>01790-493968</li>
                            <li className={classes.contact_icons}>contact@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="quick_links">
                        <ul className={['d-flex', classes.right].join(' ')}>
                            <li className={classes.contact_icons}>My Account</li>
                            <li className={classes.contact_icons}>All Products</li>
                            <li className={classes.contact_icons}>View Cart</li>
                            <li className={classes.contact_icons}>Login or Register</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default topbar;
