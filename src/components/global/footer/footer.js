import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import classes from './footer.module.css';

const footer = () => (
    <footer className={['py-5', classes.footer_area].join(' ')}>
        <div className="footer-big">
            <Container>
                <Row lg={3} md={3} sm={2} xs={2} className={classes.footer_row}>
                    <Col className="py-2 text-left">
                        <div className={classes.footer_widget_menu}>
                            <h3 className={classes.footer_menu_title}>About Us</h3>
                            <ul>
                                <li>Compnay Overview</li>
                                <li>Our Teams</li>
                                <li>Return and refund Policy</li>
                                <li>Terms &amp; Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} xs={12} className="py-2 text-left">
                        <div className={classes.footer_widget_contact}>
                            <h3 className={classes.footer_contact_title}>
                                Do You have Any Questions?
                            </h3>
                            <Form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone or Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        row="3"
                                        className="form-control"
                                        placeholder="Your Message"
                                    />
                                </div>
                                <button
                                    className={[classes.btn_block, 'btn btn-primary'].join(' ')}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </Form>
                        </div>
                    </Col>

                    <Col className="py-2 text-left">
                        <div className="footer-widget-social">
                            <h3 className={classes.footer_social_title}>Follow Us</h3>
                            <div className={classes.social_profiles}>
                                <img
                                    src="https://www.flaticon.com/svg/static/icons/svg/145/145802.svg"
                                    alt="facebook"
                                />

                                <img
                                    src="https://www.flaticon.com/svg/static/icons/svg/145/145812.svg"
                                    alt="twitter"
                                />

                                <img
                                    src="https://www.flaticon.com/svg/static/icons/svg/187/187209.svg"
                                    alt="youtube"
                                />
                            </div>
                            <div className={classes.app}>
                                <h4>Download App</h4>
                                <img
                                    src="https://www.flaticon.com/svg/static/icons/svg/300/300218.svg"
                                    alt="PlayStore"
                                />
                            </div>
                            <div className={classes.location}>
                                <h4>Office Address</h4>
                                <p>Uttara, Dhaka, Bangladesh - 1230</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
);

export default footer;
