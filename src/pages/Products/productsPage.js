import React from 'react';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import ProductPageHeader from '../../components/header/ProductsHeader/productHeader';
import Products from '../../components/Products/products';

const productsPage = () => (
    <div>
        <GlobalHeader />
        <ProductPageHeader />
        <Products />
        <GlobalFooter />
    </div>
);

productsPage.propTypes = {};

export default productsPage;
