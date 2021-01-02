import React from 'react';
import data from './data';
import classes from './howItWorks.module.css';

const items = data.map((rv) => (
    <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <img className={classes.serviceImage} src={rv.image} alt={rv.clientName} />
            <h4 className={classes.title}>{rv.clientName}</h4>
            <p>{rv.desc}</p>
        </div>
    </div>
));

const howItWorks = () => (
    <div className="container">
        <div className="row">{items}</div>
    </div>
);

export default howItWorks;
