import React from 'react';
import ComboOffer from '../../components/combo/combo';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import ReadyMealsOffer from '../../components/ReadyMealsCategory/readyMeals';

const offerPage = () => (
    <div>
        <GlobalHeader />
        <ComboOffer />
        <ReadyMealsOffer />
        <GlobalFooter />
    </div>
);

offerPage.propTypes = {};

export default offerPage;
