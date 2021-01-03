import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from './banner.module.css';
import data from './data';

const singleBanner = data.map((banner) => (
    <Col>
        <div className={classes.banner}>
            <img className={classes.products_image} src={banner.image} alt={banner.title} />
        </div>
    </Col>
));

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 778 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 777, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const banner = (props) => (
    <Container>
        <Row lg={1} md={1} xm={1} xs={1} className="my-3">
            <Carousel
                arrows={false}
                showDots
                swipeable
                draggable
                responsive={responsive}
                ssr // means to render carousel on server-side.
                infinite
                autoPlay={props.deviceType !== 'mobile'}
                autoPlaySpeed={2000}
                keyBoardControl
                customTransition="all .5 ease-in"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={[]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {singleBanner}
            </Carousel>
        </Row>
    </Container>
);

export default banner;
