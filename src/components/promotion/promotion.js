import React from 'react';
import { Col } from 'react-bootstrap';
import classes from './promotion.module.css';

const promotion = () => (
    <div className={classes.promotion}>
        <div className={classes.promotion_container}>
            <Col>
                <h2 className={classes.promotion_text}>
                    নিৰ্দিষ্ট কার্ড ব্যবহার করলে পাচ্ছেন ১৫% ডিসকাউন্ট । ১ জানুয়ারী থেকে ৩১ জানুয়ারী
                    পর্যন্ত
                </h2>
            </Col>
        </div>
    </div>
);

export default promotion;

// {['container', classes.promotionBox].join(' ')}
