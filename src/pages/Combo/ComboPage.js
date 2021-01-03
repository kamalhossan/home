import React from 'react';
import Combo from '../../components/combo/combo';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import ComboHeader from '../../components/header/ComboHeader/comboHeader';

const ComboPage = () => (
    <div>
        <GlobalHeader />
        <ComboHeader />
        <Combo />
        <GlobalFooter />
    </div>
);

export default ComboPage;
