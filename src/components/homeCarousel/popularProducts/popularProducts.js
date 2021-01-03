import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../homeCarousel';
import classes from './popularProducts.module.css';

const popularProducts = () => (
    <div className="py-3">
        <div className={classes.textHeadingBg}>
            <h2 className={classes.categoryTitle}>Popular Category</h2>
        </div>
        <Container className="p-0">
            <Carousel />
        </Container>
    </div>
);

export default popularProducts;
