import React from 'react';
import Checkout from '../../components/checkout/checkout';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';

const checkoutpage = () => (
    <div>
        <GlobalHeader />
        <Checkout />
        <GlobalFooter />
    </div>
);

export default checkoutpage;
