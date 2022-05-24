import React from 'react';
import logingBall from '../../images/Ball-1s-200px.svg'
const LoadingScreen = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div>
                <img className='h-full' src={logingBall} alt="" />
            </div>
        </div>
    );
};

export default LoadingScreen;