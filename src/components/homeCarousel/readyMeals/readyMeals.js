import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../homeCarousel';

const readyMeals = () => (
    <div className="py-3">
        <div className="textHeadingBg">
            <h2 className="categoryTitle">Popular Ready Meals</h2>
        </div>
        <Container className="p-0 mt-2">
            <Carousel />
        </Container>
    </div>
);

export default readyMeals;
