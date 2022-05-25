import React from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({product,itemCardbtnClickHandle}) => {
    const {_id,price,img,quantity,title,discription}= product;

    return (
        <div className='max-w-sm rounded-lg mx-auto border border-gray-200 shadow-md'>


            <div className='flex justify-center items-center'>
                <img className='rounded-t-lg h-72 ' src={img} alt="" />
            </div>
               <div className='px-7 py-2  text-gray-800'>
                <h1 className=' text-base mb-2  tracking-tight bg-gray-200  px-2 w-7/12 py-1 rounded-3xl text-center text-gray-600 '>Available product {quantity}</h1>
                <p className='mb-3 font-semibold text-gray-900'>{title}</p>
               <p>{discription?.slice(0,100)}</p>
               
                    
                
                <div className='my-3 flex justify-between'>
                    <h2 className='text-2xl'>Price : {price}</h2>
                    <button onClick={()=>itemCardbtnClickHandle(_id)} className='px-5 py-1 border-2 border-sky-400 rounded-3xl text-md  text-sky-400'>Details</button>
                </div>
            </div>







        </div>
    );
};

export default ProductCard;