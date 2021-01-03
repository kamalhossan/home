import React from 'react';
import { Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from './data';
import classes from './homeCarousel.module.css';

const singleProduct = data.map((productDetails) => (
    <Col className="my-2">
        <div className={classes.prodcuts_container}>
            <div className={classes.products_top_image}>
                <img
                    className={classes.products_image}
                    src={productDetails.image}
                    alt={productDetails.title}
                />
                <div className={classes.product_hover_section}>
                    <button className={classes.productHoverBtn} type="button">
                        View Details
                    </button>
                </div>
            </div>
            <div className="products_content p-3 text-center">
                <p className={classes.product_brands}>{productDetails.brands}</p>
                <h4 className={classes.products_title}>{productDetails.title}</h4>
                <p className={classes.product_Price}>{productDetails.price}</p>
                <button className={classes.products_btn} type="button">
                    {productDetails.btn}
                </button>
            </div>
        </div>
    </Col>
));

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 778 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 777, min: 0 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const homeCarousel = (props) => (
    <Carousel
        arrows
        showDots={false}
        swipeable
        draggable
        responsive={responsive}
        ssr // means to render carousel on server-side.
        infinite
        autoPlay={props.deviceType !== 'mobile'}
        autoPlaySpeed={1500}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        {singleProduct}
    </Carousel>
);

export default homeCarousel;
