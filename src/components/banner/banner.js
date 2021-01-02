import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from './banner.module.css';
import data from './data';

const singleBanner = data.map((banner) => (
    <div className="col-md-12 col-lg-12 col-sm-12 my-2">
        <div className={classes.banner}>
            <img className={classes.products_image} src={banner.image} alt={banner.title} />
        </div>
    </div>
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
    <div className="container">
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
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {singleBanner}
        </Carousel>
    </div>
);

export default banner;
