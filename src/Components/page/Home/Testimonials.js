
import React, { useEffect, useState }  from 'react';



import ReviewSection from './ReviewSection';

const Testimonials = () => {
   
    const [comments, setComments] =useState([]);
    useEffect(()=>{
        fetch('https://gentle-coast-39284.herokuapp.com/allcomments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

console.log(comments);
    return (
        <div   className='mt-20 container mx-auto w-10/12 '>
            <h1  className='text-2xl font-semibold mb-11 '>Reviews</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                   comments.map(cmt=> <ReviewSection cmt={cmt} ></ReviewSection>) 
                }
            </div>

           
            
        </div>
    );
};

export default Testimonials;