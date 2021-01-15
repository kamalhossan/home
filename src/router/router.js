import React from 'react';
import { Route, Switch } from 'react-router-dom';
import accountpage from '../pages/account/accountpage';
import cartpage from '../pages/Cart/cartpage';
import checkoutpage from '../pages/checkout/checkoutpage';
import ComboPage from '../pages/Combo/ComboPage';
import Homepage from '../pages/Home/Homepage';
import loginpage from '../pages/login/loginpage';
import MarketCategory from '../pages/MarketCategory/marketCategoryPage';
import OfferPage from '../pages/OfferPage/offerPage';
import partnerpage from '../pages/partner/partnerpage';
import productsPage from '../pages/Products/productsPage';
import ReadyMealsPage from '../pages/ReadyMealsCategory/readyMealsPage';
import signupPage from '../pages/signup/signupPage';
import Six from '../pages/six/six';
import WholesalePage from '../pages/WholeSale/WholeSalePage';

const router = () => (
    <>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/combo" component={ComboPage} />
            <Route exact path="/shop" component={productsPage} />
            <Route exact path="/marketCategory" component={MarketCategory} />
            <Route exact path="/offerpage" component={OfferPage} />
            <Route exact path="/readymeals" component={ReadyMealsPage} />
            <Route exact path="/wholesale" component={WholesalePage} />
            <Route exact path="/login" component={loginpage} />
            <Route exact path="/myaccount" component={accountpage} />
            <Route exact path="/partner" component={partnerpage} />
            <Route exact path="/cart" component={cartpage} />{' '}
            <Route exact path="/checkout" component={checkoutpage} />
            <Route exact path="/signup" component={signupPage} />
            <Route exact path="/six" component={Six} />
        </Switch>
    </>
);

export default router;
