import React from 'react';
import data from './data';
import classes from './leftColumn.module.css';

const services = data.map((service) => (
    <div className={classes.icon_box}>
        <div className={classes.icon_content}>
            <h4 className={classes.title}>{service.title}</h4>
            <p className={classes.desc}>{service.desc}</p>
        </div>
        <div className={classes.icon_image}>
            <img className={classes.icons} src={service.image} alt="" />
        </div>
    </div>
));

const leftColumn = () => <div className="left_column">{services}</div>;

export default leftColumn;
