import React from 'react';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import Login from '../../components/login/login';

const loginpage = () => (
    <div>
        <GlobalHeader />
        <Login />
        <GlobalFooter />
    </div>
);

export default loginpage;
