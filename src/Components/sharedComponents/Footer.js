import React from 'react';

const Footer = () => {
      const footerdate = new Date().getFullYear();



    return (
       <div className='bg-gray-900'>



      <div className='mt-44 container  pt-11 mx-auto'>
            
            <div className='grid grid-cols-2  lg:grid-cols-4  mx-auto'>
   
            <div className='space-y-2 text-gray-300 ml-7 md:ml-24 mb-7'>
           <div>
           <h2 className='text-xl text-red-600 font-semibold  mb-3'>
                  EIFCO
                   </h2>
                   <p>About</p>
                   <p>Blog</p>
                   <p>contacts</p>
                   <p>Contact Us</p>
           </div>
               </div>
               <div className='space-y-2 text-gray-300  ml-7 md:ml-24 mb-7'>
                  <div>
                  <h1 className='text-2xl font-semibold text-gray-300  mb-3'>Product</h1>
                   <p>Clinical Board</p>
                   <p>News</p>
                   <p>Events</p>
                   <p>Contact Us</p>
                  </div>
               </div>
               <div className='space-y-2 text-gray-300  ml-7 md:ml-24 mb-7'>
                 <div>
                 <h1 className='text-2xl font-semibold  text-gray-300 mb-3'>Links</h1>
                       <p>Insta by Eduskul</p>
                       <p>EIFCO Profile</p>
                       <p>EIFCO Reachrce</p>
                       <p>EIFCO  Drive</p>
                 </div>
                   
               </div>
               <div className='space-y-2 text-gray-300  ml-7 md:ml-24 mb-7'>
                  <div>
                  <h1 className='text-2xl font-semibold text-gray-300  mb-3'>More</h1>
                       <p>Help</p>
                       <p>Developers</p>
                       <p>Privacy Policy</p>
                       <p>Terms & Conditions</p>
                  </div>
                   
               </div>
   
            </div>
   
           <div className='mt-11 text-black text-center pb-7 justify-center text-lg font-medium block md:flex'>
               <p className='pr-2'>&copy; {footerdate} || All Right Reserved by  </p>
             <p className='text-sky-700'>Mmr creation ltd.</p>
           </div>
   
   
           </div>
       </div>
    );
};

export default Footer;