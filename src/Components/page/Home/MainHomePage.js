import React from 'react';
import Carousol from './Carousol';
import ProductsSection from './ProductsSection';
import ReviewSection from './ReviewSection';
import WelcomeIntro from './WelcomeIntro';

const MainHomePage = () => {
    return (
        <div>
                <Carousol></Carousol>
                <WelcomeIntro></WelcomeIntro>
                <ProductsSection></ProductsSection>
                <ReviewSection></ReviewSection>
        </div>
    );
};

export default MainHomePage;