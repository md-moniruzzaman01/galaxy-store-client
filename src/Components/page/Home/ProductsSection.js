import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import LoadingScreen from '../../sharedComponents/LoadingScreen';
import ProductCard from './ProductCard';

const ProductsSection = () => {
   
    // const { data, isLoading,refetch } = useQuery('services', () => fetch('http://localhost:5000/popular/product').then(res => res.json()));
    const navigate = useNavigate()
    const [popularProduct, setPopularProduct]=useProduct()
    // if (isLoading) {
    //     return <LoadingScreen></LoadingScreen>
    // }
    
    
    const itemCardbtnClickHandle=(id)=>{
           
            navigate(`/product/${id}`)
    }

    return (
        <div className='container mx-auto mb-24 max-w-7xl'>
        <div className=' font-medium my-11 px-2'>
            <h1 className='text-2xl md:text-3xl'>Popular Products</h1>
            
        </div>
       <div className='grid grid-cols-1 max-w-6xl mx-auto  gap-7 md:grid-cols-2 lg:grid-cols-3 px-2'>
           {
                popularProduct?.map(product=> <ProductCard 
                    key={product._id}
                    product={product}
                    itemCardbtnClickHandle={itemCardbtnClickHandle}

                    ></ProductCard>)
           }
       </div>
       <div className='flex justify-end font-medium my-5 px-2'>
       <button onClick={()=>navigate('/products')} className='text-xl text-sky-400 md:text-2xl'>View All</button>
            
        </div>
       
    </div>
    );
};

export default ProductsSection;