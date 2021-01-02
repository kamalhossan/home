import React from 'react';
import ComboOffer from '../Combo/ComboPage';
import ReadyMealsOffer from '../ReadyMealsCategory/readyMealsPage';

const offerPage = () => (
    <div>
        <ComboOffer />
        <ReadyMealsOffer />
    </div>
);

offerPage.propTypes = {};

export default offerPage;
