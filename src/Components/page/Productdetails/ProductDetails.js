import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PurchaseModel from './PurchaseModel';
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useQuery } from 'react-query';
import LoadingScreen from '../../sharedComponents/LoadingScreen';

const ProductDetails = () => {
    const minOrderNumber = 5
    const [orders, setOrder]=useState(minOrderNumber)
  
    const { id } = useParams();

    const { data:item, isLoading,refetch } = useQuery('services', () => fetch(`http://localhost:5000/details/${id}`).then(res => res.json()));
    if (isLoading) {
        <LoadingScreen/>
    }
    
       
   
    const pricenumber = item?.price *orders
    console.log(item?.price , orders);
    const inputOrder = useRef();
  const orderHandle=()=>{
        setOrder(inputOrder.current.value)
        
    
  }
console.log()
 
  const incressHandle =()=>{
            if (orders < item.quantity) {
                setOrder(orders + 1)
            }
            
  }

  const dicressHandle =()=>{
            if (orders > minOrderNumber) {
                setOrder(orders - 1)
            }
  }
 
    return (
        <div>
        <div className='grid grid-cols-1 container md:grid-cols-2 '>
        <div className='flex justify-center mt-5'>
            <img className='w-8/12 h-auto max-h-[650px]' src={item?.img} alt="" />
        </div>
        <div className='pl-5 mt-5  flex  items-center'>
        <div className='space-y-5'>
        <h1 className='text-2xl font-semibold text-gray-900'>{item?.title}</h1>
        <p >Availability :<span className='bg-gray-300 px-3 py-2 rounded-full mx-2 font-semibold'> {item?.quantity} </span> <span className=' font-semibold'>in stack</span></p>
        <p >Single price : ${item?.price}</p>
       
        <p className='text-2xl font-semibold  '>Total Price : <span className='text-emerald-600'>${pricenumber}</span> </p>
        <div className='flex items-center'>
            <p>order</p>
            <div className='flex items-center mx-3' >
            <p className='text-xl bg-gray-50 px-2 py-1' onClick={dicressHandle}><MdOutlineKeyboardArrowLeft/></p>
                <input 
                className='bg-gray-500 h-7 text-center text-white w-7 mx-3' 
                
                onChange={orderHandle}
                value={orders}
                ref={inputOrder} 
                type="text" />
                <p className='text-xl bg-gray-50 px-2 py-1' onClick={incressHandle }><MdOutlineKeyboardArrowRight/></p>
            </div>
            <label htmlFor="order-model" className='border px-5 py-2 bg-emerald-600 text-white'>Order now</label>
        </div>
        
        <div className=' w-10/12'>
            <p>{item?.discription}</p>
        </div>
        
       

        </div>
        </div>

    </div>
   <PurchaseModel 
   pricenumber={pricenumber}
   item={item}
   orders={orders}
   ></PurchaseModel>
    </div>
    );
};

export default ProductDetails;