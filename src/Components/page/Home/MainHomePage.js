import React from 'react';
import Carousol from './Carousol';
import ProductsSection from './ProductsSection';
import ReviewSection from './ReviewSection';

const MainHomePage = () => {
    return (
        <div>
                <Carousol></Carousol>
                <ProductsSection></ProductsSection>
                <ReviewSection></ReviewSection>
        </div>
    );
};

export default MainHomePage;