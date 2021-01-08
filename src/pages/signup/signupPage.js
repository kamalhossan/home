import React from 'react';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import Signup from '../../components/signup/signup';

const signupPage = () => (
    <div>
        <GlobalHeader />
        <Signup />
        <GlobalFooter />
    </div>
);

export default signupPage;
