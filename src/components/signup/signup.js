import React from 'react';
import { Link } from 'react-router-dom';
import classes from './signup.module.css';

const signup = () => (
    <div className="container">
        <div className="row d-flex justify-content-center my-5">
            <div className={['col-md-8 py-5', classes.boxShadow].join(' ')}>
                <form className="p-3">
                    <div className="form-group text-left">
                        <h2 className={['text-center mb-4', classes.title].join(' ')}>
                            Registration as a Customer
                        </h2>
                        <p className="mb-0">Your Full Name</p>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="form-group text-left">
                        <p className="mb-0">Email Address</p>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="ex. Home Delight"
                        />
                    </div>
                    <div className="form-group text-left">
                        <p className="mb-0">Organization Name</p>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="ex. Home Delight"
                        />
                    </div>
                    <div className="form-group text-left">
                        <p className="mb-0">Contact Number</p>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Mobile"
                        />
                    </div>
                    <div className="form-group text-left">
                        <p className="mb-0">Address</p>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Full Address"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">
                        Signup Now
                    </button>
                </form>
                <h2 className={classes.account_signup}>
                    Signup as a Vendor?{' '}
                    <Link to="/partner">
                        <strong>Signup</strong>
                    </Link>
                </h2>
            </div>
        </div>
    </div>
);

export default signup;
