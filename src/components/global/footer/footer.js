import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './footer.module.css';

const footer = () => (
    <footer className={['py-5', classes.footer_area].join(' ')}>
        <div className="footer-big">
            <Container>
                <Row lg={4} md={4} sm={2} xs={2}>
                    <Col className="col-md-3 col-sm-6 py-2 text-left">
                        <div className="footer-widget-about">
                            <h3 className={classes.footer_title}>Get in Touch</h3>
                            <p>Don’t miss any updates of our new templates and extensions.!</p>
                            <input
                                type="email"
                                placeholder="Email"
                                className={['form-control', classes.margin_bottom].join(' ')}
                            />
                            <button type="submit" className="btn btn-primary">
                                Subscribe
                            </button>
                        </div>
                    </Col>

                    <Col className="col-md-3 col-sm-6  py-2 text-left">
                        <div className="footer-widget-menu-1">
                            <h3 className={classes.footer_title}>Top Categories</h3>
                            <ul>
                                <li>About Us</li>
                                <li>How It Works</li>
                                <li>Affiliates</li>
                                <li>Testimonials</li>
                                <li>Plan and Pricing</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </Col>

                    <Col className="col-md-3 col-sm-6 py-2 text-left">
                        <div className="footer-widget-menu2">
                            <h3 className={classes.footer_title}>About Us</h3>
                            <ul>
                                <li>About Us</li>
                                <li>How It Works</li>
                                <li>Affiliates</li>
                                <li>Testimonials</li>
                                <li>Plan and Pricing</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </Col>

                    <Col className="col-md-3 col-sm-6 text-left py-2">
                        <div className="footer-widget-social">
                            <h3 className={classes.footer_title}>Connect Us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Liknedin</li>
                                <li>Youtube</li>
                                <li>Vimeo</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        {/* <div className="mini-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright-text">
                            <p>
                                © 2018
                                <a href={}>DigiPro</a>. All rights reserved. Created by
                                <a href={}>AazzTech</a>
                            </p>
                        </div>

                        <div className="go_top">
                            <span className="icon-arrow-up" />
                        </div>
                    </div>
                </div>
            </div>
        </div>} */}
    </footer>
);

export default footer;
