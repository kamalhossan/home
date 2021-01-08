import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './howItWorks.module.css';

const howItWorks = () => (
    <div className={classes.bgwhite}>
        <div className="textHeadingBg">
            <h2 className="categoryTitle">How it Works?</h2>
        </div>
        <Container className="py-5">
            <Row lg={1} md={1} sm={1} xs={1}>
                <Col>
                    <img
                        className={classes.worksflow}
                        src="https://www.elitemcommerce.com/wp-content/uploads/sites/3/2019/08/how-it-works-new.jpg"
                        alt="how it works"
                    />
                </Col>
            </Row>
        </Container>
    </div>
);

export default howItWorks;
