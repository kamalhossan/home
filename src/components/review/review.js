import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import data from './data';
import classes from './review.module.css';

const singleReview = data.map((rv) => (
    <Col className={classes.col7} md={2} sm={6} xs={6}>
        <div className="shadow-sm pb- bg-white rounded text-center bg-dark">
            <div className="bg-dark p-3">
                <img className={classes.topImage} src={rv.image} alt={rv.clientName} />
            </div>
            <div className={['py-3 px-1', classes.plusIcon].join(' ')}>
                <CountUp className={classes.countNumber} end={rv.clientNumber} /> +
                <h4 className={classes.title}>{rv.clientName}</h4>
            </div>
        </div>
    </Col>
));

const review = () => (
    <div className="py-3">
        <div className="textHeadingBg">
            <h2 className="categoryTitle">Our Achievement</h2>
        </div>
        <Container>
            <Row className={['my-5', classes.reviewsrow].join(' ')}>{singleReview}</Row>
        </Container>
    </div>
);

export default review;
