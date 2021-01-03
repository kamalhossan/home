import React from 'react';
import Cart from '../../components/cart/cart';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';

const checkoutpage = () => (
    <div>
        <GlobalHeader />
        <Cart />
        <GlobalFooter />
    </div>
);

export default checkoutpage;
