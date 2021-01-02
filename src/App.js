import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
// import Login from './components/login/login';
// import Partner from './components/partner/partner';
// import Checkout from './components/checkout/checkout';
// import Account from './components/account/account';
// import MarketCategoryPage from './pages/MarketCategory/marketCategoryPage';
// import Combo from './pages/Combo/ComboPage';
// import ReadyMealsPage from './pages/ReadyMealsCategory/readyMealsPage';
// import OfferPage from './pages/OfferPage/offerPage';
// import WholesalePage from './pages/WholeSale/WholeSalePage';
// import Cart from './components/cart/cart';
import Homepage from './pages/Home/Homepage';

function App() {
    return (
        <div className="App">
            <Homepage />
            <Footer />
        </div>
    );
}

export default App;
