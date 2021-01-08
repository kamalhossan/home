import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './categoryMenu.module.css';

const categoryMenu = () => (
    <div className={classes.categoryMenu}>
        <Navbar expand="md" className={classes.menuNavbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    <Link className="nav-link" to="/marketCategory">
                        Product Markets
                    </Link>
                    <Link className="nav-link" to="/readymeals">
                        Homemade Ready Meals
                    </Link>
                    <Link className="nav-link" to="#none">
                        Ready to Cook Product
                    </Link>
                    <Link className="nav-link" to="/offerpage">
                        Combo Packs
                    </Link>
                    <Link className="nav-link" to="/wholesale">
                        Wholesale Zone
                    </Link>
                    <Link className="nav-link" to="/partner">
                        Become a Partner
                    </Link>

                    <Link className="nav-link" to="#earn">
                        Buy &amp; Earn Opportnity
                    </Link>
                    <Link className="nav-link" to="#servicepoint">
                        Find various service point
                    </Link>
                    <Link className="nav-link mobile_menu" to="/cart">
                        Handbag
                    </Link>
                    <Link className="nav-link mobile_menu" to="/login">
                        Login or Register
                    </Link>
                    <Link className="nav-link mobile_menu" to="/myaccount">
                        My Account
                    </Link>

                    {/* <Link className="nav-link" to="/offerpage">
                        Product Markets
                    </Link>
                    <Link className="nav-link" to="/marketCategory">
                        Market
                    </Link>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/offerpage">
                        Offer
                    </Link>
                    <Link className="nav-link" to="/marketCategory">
                        Market
                    </Link>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/offerpage">
                        Offer
                    </Link>
                    <Link className="nav-link" to="/marketCategory">
                        Market
                    </Link>
                    <NavDropdown title="Offer" id="basic-nav-dropdown">
                        <Link className="dropdown-item" to="/combo">
                            Combo Pack
                        </Link>
                        <Link className="dropdown-item" href="#action/3.2">
                            Buy &amp; Earn Oppurtunity
                        </Link>
                    </NavDropdown>
                    <NavDropdown title="All Category" id="basic-nav-dropdown">
                        <Link className="dropdown-item" to="/readymeals">
                            Ready Meals
                        </Link>
                        <Link className="dropdown-item" to="#readytocook">
                            Ready To Cook
                        </Link>
                        <Link className="dropdown-item" to="/wholesale">
                            Wholesale Zone
                        </Link>
                    </NavDropdown>
                    <NavDropdown title="WooPages" id="basic-nav-dropdown">
                        <Link className="dropdown-item" to="/cart">
                            View Cart
                        </Link>
                        <Link className="dropdown-item" to="/checkout">
                            Checkout
                        </Link>
                    </NavDropdown>
                    <Link className="nav-link" to="#none">
                        Find various service point
                    </Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default categoryMenu;
