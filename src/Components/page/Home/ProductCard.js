import React from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({product,itemCardbtnClickHandle}) => {
    const {_id,price,image,quantity,title,discribtion}= product;

    return (
        <div className='max-w-sm rounded-lg mx-auto border border-gray-200 shadow-md'>


            <div>
                <img className='rounded-t-lg' src={image} alt="" />
            </div>
            <div className='p-4 text-gray-800'>
                <h1 className=' text-2xl   tracking-tight '>{quantity}</h1>
                <p className='mb-3 font-semibold text-gray-900'>{title}</p>
               <p>{discribtion?.slice(0,100)}</p>
               
                    
                
                <div className='my-3 flex justify-between'>
                    <h2 className='text-3xl'>{price}</h2>
                    <button onClick={()=>itemCardbtnClickHandle(_id)} className='px-5 py-1 border-2 border-sky-400 rounded-3xl text-md  text-sky-400'>Details</button>
                </div>
            </div>







        </div>
    );
};

export default ProductCard;