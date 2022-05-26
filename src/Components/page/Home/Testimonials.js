
import React, { useEffect, useState }  from 'react';



import ReviewSection from './ReviewSection';

const Testimonials = () => {
   
    const [comments, setComments] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allcomments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

console.log(comments);
    return (
        <div   className='mt-20 container mx-auto w-10/12 '>
            <h1  className='text-2xl font-semibold mb-11 '>Expert Doctors</h1>
            
            <div className='grid grid-cols-3'>
                {
                   comments.map(cmt=> <ReviewSection></ReviewSection>) 
                }
            </div>

           
            
        </div>
    );
};

export default Testimonials;