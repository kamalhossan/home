import React from 'react';
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavbarBrand,
    // eslint-disable-next-line prettier/prettier
    NavDropdown
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => (
    <div className={classes.globalHeader}>
        <Container>
            <Navbar expand="lg">
                <NavbarBrand>
                    <Link to="/">
                        <img
                            className={['img-fluid', classes.navLogo].join(' ')}
                            src="http://kamalhossan.com/wp-content/uploads/2021/01/Home-Delight-Logo.png"
                            alt="Home Delight"
                        />
                    </Link>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
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
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                        <NavDropdown title="WooPages" id="basic-nav-dropdown">
                            <Link className="dropdown-item" to="/cart">
                                View Cart
                            </Link>
                            <Link className="dropdown-item" to="/checkout">
                                Checkout
                            </Link>

                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>
);

export default Header;
