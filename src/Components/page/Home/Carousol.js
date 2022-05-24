import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import image1 from '../../../images/eifco-web-banner-1.jpg'
import image2 from '../../../images/eifco-web-banner-2.jpg'
import image3 from '../../../images/eifco-web-banner-3.jpg'
import image4 from '../../../images/eifco-web-banner-4.jpg'
import image5 from '../../../images/eifco-web-banner-5.jpg'

const Carousol = () => {
    const featuredProducts = [
        <div><img src={image1} alt="" /></div>,
        <div><img src={image2} alt="" /></div>,
        <div><img src={image3} alt="" /></div>,
        <div><img src={image4} alt="" /></div>,
        <div><img src={image5} alt="" /></div>
     
    ];
    let count = 0;
    let slideInterval;
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    return (
        <div>
            <div ref={slideRef} className="w-full select-none  relative">
            <div className="aspect-w-16 aspect-h-9 ">
                {/* <img src={featuredProducts[currentIndex]} alt="" /> */}
                {featuredProducts[currentIndex]}
            </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnPrevClick}
                >
                    <AiOutlineVerticalRight size={30} />
                </button>
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnNextClick}
                >
                    <AiOutlineVerticalLeft size={30} />
                </button>
            </div>
        </div>
        </div>
    );
};

export default Carousol;