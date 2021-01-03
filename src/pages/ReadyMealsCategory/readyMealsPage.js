import React from 'react';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import ReadyMealsHeader from '../../components/header/ReadyMealsHeader/readyMealsHeader';
import ReadyMealsCategory from '../../components/ReadyMealsCategory/readyMeals';

const marketCategoryPage = () => (
    <div>
        <GlobalHeader />
        <ReadyMealsHeader />
        <ReadyMealsCategory />
        <GlobalFooter />
    </div>
);

export default marketCategoryPage;
