import React from 'react';
import { FaHandshake } from "react-icons/fa";
import img from '../../../images/eifcoimgesss.jpg'
const BestEge = () => {
    return (
        <div className="hero my-7 w-full max-w-7xl mx-auto">
  <div  className="hero-content flex-col lg:flex-row-reverse">
   <div  className='w-full'> <img   className='max-w-xl w-full'  src={img} /></div>
    <div  className='space-y-3 flex flex-col  items-center md:items-start w-full' >
        <p  className='py-5 bg-gray-400 w-20 text-4xl text-white rounded-full flex justify-center items-center'><FaHandshake/></p>
      <h1 className="text-2xl font-semibold">Team Working Dedicatedly</h1>
      <p  className='mr-7'>We have 62+ years of experience in providing high precision machines.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
    );
};

export default BestEge;