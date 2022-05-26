import React from 'react';
import './portfolio.css'
import bgImage from '../../../images/96794329.jfif'
const Portfolio = () => {
    return (
        <div>
            <div className="landing-section min-h-screen text-white"  style={{ backgroundImage: 'url(' + bgImage + ')'}} >
      <div className="text-section  w-full h-full flex justify-center relative  ">
        <div className=" absolute bottom-44 text-center text-3xl lg:text-4xl ml-0 lg:ml-11 space-y-4">
        <h1 className=""><span className="font-lavishly">Hi, My name is <span className=" text-secondary font-bold text-2xl md:text-4xl">Moniruzzaman</span> ,</span></h1>
        <h1 className=""> I’m a Professional <span className="text-red-500 block mt-3 text-4xl lg:text-6xl  ">Web Developer</span></h1>
        </div>
      </div>

    </div>
    <div className='mx-auto max-w-7xl my-44  '>
        <p className='text-xl mx-5 md:mx-11'>I'm Professional MERN stack web designer and developer . I have complited MERN stack main course in Programming Hero institute .My exparties in Frontend reactjs project as wel as i know basic of Nodejs . I have compited more then 13 + project .</p>
        <p className='mt-11 text-xl mx-5 md:mx-11 font-semibold'>My exparties in  tecnology : </p>
        <ul className='text-base mt-7 mx-11 md:mx-24 list-disc'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Javascript</li>
            <li>Reactjs</li>
            <li>Firebase</li>
            <li>Api</li>
            <li>Nodejs</li>
            <li>Mongodb</li>
            <li>Express</li>
        </ul>
    </div>
        </div>
    );
};

export default Portfolio;