import React from 'react';
import { useQuery } from 'react-query';
import { AiFillStar } from "react-icons/ai";
const ReviewSection = ({cmt}) => {
   
 
    return (
      <div className='flex  justify-center items-center my-5 '>
      <div className='flex items-center justify-center border-2 h-72 w-full px-1  '>
        
          <div className='w-10/12 ml-5 lg:w-10/12 lg:ml-11'>
          <div className='flex justify-end mb-3 text-gray-500'> <h4 className='font-semibold '>{cmt?.email}</h4></div>
              <p className='italic '>{cmt?.comments}</p>
              <p className='my-3 text-gray-700 flex items-center'> 
              <span className='text-amber-600 text-xl flex mr-2'>
              <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
              </span>
           
            
              stars   </p>
              <div className='flex justify-end mr-1 mt-11 lg:mr-14'>
                  <div>
                      <h3 className='font-heading font-normal text-textColor'>{cmt?.Name}</h3>
                      <p className='text-textColor font-basic font-normal '>Happy Customar</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
};

export default ReviewSection;