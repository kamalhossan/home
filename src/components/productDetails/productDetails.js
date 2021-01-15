import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from './css.module.css';
import data from './data';

const itemsPicture = data.map((pic) => (
    <div className="itemsPic">
        <img className="img-fluid w-100" src={pic.image} alt={pic.productTitle} />
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
const productDetails = (props) => (
    <Row className={classes.product_details}>
        <Col lg={4} md={4} sm={4}>
            <Carousel
                className={classes.position}
                arrows
                showDots={false}
                swipeable
                draggable
                responsive={responsive}
                ssr // means to render carousel on server-side.
                infinite={false}
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
                {itemsPicture}
            </Carousel>
        </Col>
        <Col>
            <div className={classes.input_group}>
                <div className={classes.btn_group}>
                    <FontAwesomeIcon className={classes.faIcons} icon={faMinus} />

                    <input
                        className={['form-control', classes.asText].join(' ')}
                        type="text"
                        name="quantity"
                        value="1"
                        min="1"
                        max="100"
                    />

                    <FontAwesomeIcon className={classes.faIcons} icon={faPlus} />
                </div>
            </div>
            <h4 className="text-center">Total Price 100Tk</h4>
        </Col>
        <Col>
            <a href="#top" className="btn btn-primary">
                Add to Handbag
            </a>
        </Col>
    </Row>
);
export default productDetails;
