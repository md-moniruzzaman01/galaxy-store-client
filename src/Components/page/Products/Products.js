import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../Home/ProductCard';

const Products = () => {
    const [product, setProduct] =useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('https://gentle-coast-39284.herokuapp.com/all')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const itemCardbtnClickHandle=(id)=>{
           
        navigate(`/product/${id}`)
}
    return (
        <div className='max-w-7xl mx-auto '>
            <div className='grid grid-cols-1 max-w-6xl mx-auto  gap-7 md:grid-cols-2 lg:grid-cols-3 px-2 mt-11'>
           {
                product?.map(product=> <ProductCard 
                    key={product._id}
                    product={product}
                    itemCardbtnClickHandle={itemCardbtnClickHandle}

                    ></ProductCard>)
           }
       </div>
        </div>
    );
};

export default Products;