
import React from 'react';

const Blog = ({blg,Detailsbtn}) => {
    const {id,img,name,body,comments,tags} =blg;
    return (
   
            <div onClick={()=>Detailsbtn(id)} className='   shadow-md mb-11 mt-7 py-5 p-3 max-w-3xl mx-auto rounded-md'>
        <div className='w-full relative'>
            <img className='w-full h-full rounded-sm' src={img} alt="" />
            
        </div>
        <div className='relative'>
            <h1 className='text-gray-800 mt-7 text-2xl'>{name}</h1>
            <p className='text-gray-700 mt-5 pb-16'>{body?.slice(0,100)}... <span className='text-sky-700 underline'>read more</span></p>
            <div className='flex text-gray-400 absolute bottom-1'>
            <p className=' border-r-2 border-gray-400'>  <span className='px-2'>{tags}</span></p>
            <p className='ml-2'><span className='ml-2'>{comments} Comments</span></p>
            </div>
        </div>
        </div>
       
    
    );
};

export default Blog;