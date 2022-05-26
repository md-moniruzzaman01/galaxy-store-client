import React from 'react';
import Businesstrust from '../Business/Businesstrust';
import BestEge from './BestEge';
import Carousol from './Carousol';
import ProductsSection from './ProductsSection';

import Testimonials from './Testimonials';
import WelcomeIntro from './WelcomeIntro';

const MainHomePage = () => {
    return (
        <div>
                <Carousol></Carousol>
                <Businesstrust></Businesstrust>
                <ProductsSection></ProductsSection>
                <WelcomeIntro></WelcomeIntro>
                <Testimonials></Testimonials>
                <BestEge></BestEge>
        </div>
    );
};

export default MainHomePage;