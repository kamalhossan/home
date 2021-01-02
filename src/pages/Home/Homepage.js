import React from 'react';
import Banner from '../../components/banner/banner';
import HeadingMenu from '../../components/header/headerMenu/headerMenu';
import TopBar from '../../components/header/topbar/topbar';
import Carousal from '../../components/homeCarousel/homeCarousel';
import HowToWork from '../../components/howItWorks/howItWorks';
import Promotion from '../../components/promotion/promotion';
import Review from '../../components/review/review';

const Homepage = () => (
    <div>
        <TopBar />
        <HeadingMenu />
        <div className="promotion">
            <Promotion />
        </div>
        <div className="banner">
            <Banner />
        </div>
        <div className="popular_products">
            <h2 className="my-3">Most Popular Products</h2>
            <Carousal />
        </div>
        <div className="wholesale_products">
            <h2 className="my-3">Wholesale Products</h2>
            <Carousal />
        </div>
        <div className="readymade_products">
            <h2 className="my-3">Most Popular Homepage Ready Meals</h2>
            <Carousal />
        </div>
        <Review />
        <HowToWork />
    </div>
);
export default Homepage;
