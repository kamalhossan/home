import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from './data';
import classes from './testimonials.module.css';

const reviews = data.map((review) => (
    <Col className={classes.animation}>
        <div className={classes.testimonial}>
                    
            <div className={classes.testimonial_content}>
                          
                <div className={classes.testimonial_icon}>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                                             
                </div>
                <p className={classes.description}>{review.desc}</p>                   
            </div>
            <h3 className={classes.title}>{review.name}</h3>
            <span className={classes.post}>{review.post} </span>
        </div>
    </Col>
));

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 778 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 777, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const testimonials = (props) => (
    <div className={classes.testimonials}>
        <div className="textHeadingBg">
            <h2 className="categoryTitle">Hear what our customer have to say!</h2>
        </div>
        <Container className="py-5">
            <Carousel
                className={classes.consumer_review}
                arrows={false}
                showDots
                swipeable
                draggable
                responsive={responsive}
                ssr // means to render carousel on server-side. infinite
                autoPlay={props.deviceType !== 'mobile'}
                infinite
                autoPlaySpeed={5000}
                keyBoardControl
                customTransition="all .5 ease"
                transitionDuration={1500}
                containerClass="reviewscontainer"
                removeArrowOnDeviceType={[]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {reviews}
            </Carousel>
        </Container>
    </div>
);

export default testimonials;
