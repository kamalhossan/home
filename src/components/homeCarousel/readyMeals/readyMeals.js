import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../homeCarousel';
import classes from './readyMeals.module.css';

const readyMeals = () => (
    <div className="py-3">
        <div className={classes.textHeadingBg}>
            <h2 className={classes.categoryTitle}>Popular Ready Meals</h2>
        </div>
        <Container className="p-0">
            <Carousel />
        </Container>
    </div>
);

export default readyMeals;
