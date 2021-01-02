import React from 'react';
import ProductPageHeader from '../../components/header/ProductsHeader/productHeader';
import Products from '../../components/Products/products';

const productsPage = () => (
    <div>
        <ProductPageHeader />
        <Products />
    </div>
);

productsPage.propTypes = {};

export default productsPage;
