import React from 'react';
import { Link } from 'react-router-dom';
import classes from './login.module.css';

const login = () => (
    <div className="container">
        <div className="row d-flex justify-content-center my-5">
            <div className={['col-md-6 py-5', classes.boxShadow].join(' ')}>
                <form className="p-3">
                    <div className="form-group text-left">
                        <p htmlFor="exampleInputEmail1" className="mb-0">
                            Email address
                        </p>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We will never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group text-left">
                        <p htmlFor="exampleInputPassword1" className="mb-0">
                            Password
                        </p>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-check text-left">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <p className="form-check-label" htmlFor="exampleCheck1">
                            Remember Me
                        </p>
                    </div>
                    <button
                        type="submit"
                        className={['btn btn-primary', classes.btn_submit].join(' ')}
                    >
                        Submit
                    </button>
                </form>
                <h2 className={classes.account_signup}>
                    Dont have an account?{' '}
                    <Link to="/signup">
                        <strong>Signup</strong>
                    </Link>
                </h2>
            </div>
        </div>
    </div>
);

export default login;
