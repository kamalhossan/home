import React from 'react';
import Banner from '../../components/banner/banner';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import PopularProducts from '../../components/homeCarousel/popularProducts/popularProducts';
import ReadyMeals from '../../components/homeCarousel/readyMeals/readyMeals';
import WholesaleProducts from '../../components/homeCarousel/wholesaleProducts/wholesaleProducts';
import HowToWork from '../../components/howItWorks/howItWorks';
import Promotion from '../../components/promotion/promotion';
import Review from '../../components/review/review';
import classes from './homepage.module.css';

const Homepage = () => (
    <>
        <GlobalHeader />
        <div className={classes.bodyBg}>
            <Promotion />
            <Banner />
            <PopularProducts />
            <WholesaleProducts />
            <ReadyMeals />
            <Review />
            <HowToWork />
        </div>
        <GlobalFooter />
    </>
);
export default Homepage;
