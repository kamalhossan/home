import React from 'react';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import ReadyToCook from '../../components/readyToCook/readyToCook';
import Wholesale from '../../components/wholesale/wholesale';

const WholeSalePage = () => (
    <div>
        <GlobalHeader />
        <Wholesale />
        <ReadyToCook />
        <GlobalFooter />
    </div>
);

export default WholeSalePage;
