import React from 'react';
import CategoryMenu from './category/categoryMenu';
import Header from './header/header';

const globalHeader = () => (
    <div>
        <Header />
        <CategoryMenu />
    </div>
);

export default globalHeader;
