import React from 'react';
import CountUp from 'react-countup';
import data from './data';
import classes from './review.module.css';

const singleReview = data.map((rv) => (
    <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="shadow-sm p-3 mb-5 bg-white rounded text-center">
            <img className={classes.topImage} src={rv.image} alt={rv.clientName} />
            <CountUp className={classes.countNumber} end={rv.clientNumber} />
            <h4 className={classes.title}>{rv.clientName}</h4>
        </div>
    </div>
));

const review = () => (
    <div className="container">
        <div className="row my-5">{singleReview}</div>
    </div>
);

export default review;
