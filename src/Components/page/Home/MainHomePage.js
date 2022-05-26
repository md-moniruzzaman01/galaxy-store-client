import React from 'react';
import Carousol from './Carousol';
import ProductsSection from './ProductsSection';

import Testimonials from './Testimonials';
import WelcomeIntro from './WelcomeIntro';

const MainHomePage = () => {
    return (
        <div>
                <Carousol></Carousol>
                <WelcomeIntro></WelcomeIntro>
                <ProductsSection></ProductsSection>
                <Testimonials></Testimonials>
        </div>
    );
};

export default MainHomePage;