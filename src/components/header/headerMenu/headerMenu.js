import React from 'react';
import classes from './headerMenu.module.css';

const headerMenu = () => (
    <div className={classes.headerMenu}>
        <div className="container">
            <nav className="navbar sticky-top navbar-expand-lg ">
                <img
                    className={['navbar-brand img-fluid', classes.navLogo].join(' ')}
                    src="http://kamalhossan.com/wp-content/uploads/2021/01/Home-Delight-Logo.png"
                    alt="Home Delight"
                />

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#topnavbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#top">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#top">
                                Product Market
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#top">
                                Ready Meals
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#top">
                                Combo Packs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#top">
                                Wholesale Zone
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                        />
                        <button className="btn btn-outline-success  my-sm-0" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    </div>
);

export default headerMenu;
