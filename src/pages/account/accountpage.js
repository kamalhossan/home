import React from 'react';
import Account from '../../components/account/account';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';

const accountpage = () => (
    <div>
        <GlobalHeader />

        <Account />
        <GlobalFooter />
    </div>
);

export default accountpage;
