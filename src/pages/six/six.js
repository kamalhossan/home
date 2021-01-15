import React from 'react';
import { Container } from 'react-bootstrap';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import ProducerInformation from '../../components/producerInformation/producerInformation';
import ProductDetails from '../../components/productDetails/productDetails';

const six = () => (
    <div>
        <GlobalHeader />
        <Container className="py-5">
            <h3 className="text-center pt-3">View Details</h3>
            <ProductDetails />
            <ProducerInformation />
        </Container>
        <GlobalFooter />
    </div>
);

export default six;
