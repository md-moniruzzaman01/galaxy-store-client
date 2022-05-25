import React from 'react';
import { BsCheck2Circle } from "react-icons/bs";
import welcomeimg from '../../../images/eifcoimage.jpeg'
const WelcomeIntro = () => {
    return (
        <div style={{boxSizing:'border-box'}}>
            <div  className='grid grid-cols-1 lg:grid-cols-2 ml-2 md:ml-20 mt-32'>
               <div data-aos="fade-right"  className='relative  flex  mb-96 mx-2'>
                 <div className='h-96 hidden md:block w-8/12 border-8 border-red-600'>
                    
                  </div>
                  <div className='z-10 absolute h-[40vh] md:h-[50vh] md:top-[10%] left-0 md:left-[4%] '> <img className='h-full ' src={welcomeimg} alt="" /></div>
                  <div  className='absolute top-20 hidden md:block md:left-[150px] h-96 w-8/12 border-8 border-red-600'>
                   
                  </div>
               </div>
               {/*  */}
               <div  className='mt-2  space-y-7 mx-5 max-w-xl '>
                   <p  className='text-xl font-semibold uppercase text-red-600'>Welcome to EIFCO</p>
                   <h2  className='text-3xl font-semibold   uppercase'>About EIFCO Machine Tools</h2>
                     <p  className='text-gray-700 font-bold uppercase '>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                    <div className='space-y-4'>
                    <p  className='flex  font-bold uppercase '> <span  className='text-red-600 text-xl font-bold mt-1'><BsCheck2Circle/></span> <span  className='ml-2'> We are one of the leading manufacturers of machine tools in India.</span></p>
                     <p  className='flex font-bold uppercase '> <span  className='text-red-600 text-xl font-bold mt-1'><BsCheck2Circle/></span> <span  className='ml-2'>Presence in the industry for over 62 years now.</span></p>
                     <p  className='flex font-bold uppercase '> <span  className='text-red-600 text-xl font-bold mt-1'><BsCheck2Circle/></span> <span  className='ml-2'>Our customer base ranges from RELIANCE and TATA to a single man tool room.</span></p>
                     <p  className='flex font-bold uppercase '> <span  className='text-red-600 text-xl font-bold mt-1'><BsCheck2Circle/></span> <span  className='ml-2'>A wide dealer network coverage in India.</span></p>
                     <p  className='flex font-bold uppercase '> <span  className='text-red-600 text-xl font-bold mt-1'><BsCheck2Circle/></span> <span  className='ml-2'>EIFCO insists Quality is paramount.</span></p>
                     <p  className='flex font-bold uppercase '> <span  className='text-red-600 text-xl font-bold mt-1'><BsCheck2Circle/></span> <span  className='ml-2'>We execute regular export orders.</span></p>
                    </div>
                    <button className="btn btn-outline btn-primary px-7">Learn more</button>
                  </div>

            </div>
        </div>
    );
};

export default WelcomeIntro;