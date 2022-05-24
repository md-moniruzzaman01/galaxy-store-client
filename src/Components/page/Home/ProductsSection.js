import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import ProductCard from './ProductCard';

const ProductsSection = () => {
    const [popularProduct, setPopularProduct] =useProduct()
    const navigate = useNavigate()

    const itemCardbtnClickHandle=(id)=>{
           
            navigate(`/product/${id}`)
    }
console.log(popularProduct);
    return (
        <div className='container mx-auto mb-24 max-w-7xl'>
        <div className='flex justify-between font-medium my-11 px-2'>
            <h1 className='text-2xl md:text-3xl'>Popular Course</h1>
            <button className='text-xl text-sky-400 md:text-2xl'>View All</button>
        </div>
       <div className='grid grid-cols-1 max-w-7xl mx-auto  gap-7 md:grid-cols-2 lg:grid-cols-3 px-2'>
           {
                popularProduct?.map(product=> <ProductCard 
                    key={product._id}
                    product={product}
                    itemCardbtnClickHandle={itemCardbtnClickHandle}

                    ></ProductCard>)
           }
       </div>
    </div>
    );
};

export default ProductsSection;