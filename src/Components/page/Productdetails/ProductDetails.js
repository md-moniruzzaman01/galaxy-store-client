import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PurchaseModel from './PurchaseModel';

const ProductDetails = () => {
    
    const { id } = useParams();
    const [orders, setOrder]= useState(5)
   
    const [detailItem, setDetailItem] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/details/${id}`)
        .then(res => res.json())
        .then(data => setDetailItem(data))
    }, [id])
    const {price}=detailItem

    const inputOrder = useRef();
  const orderHandle=()=>{
        setOrder(inputOrder.current.value)
        
        
  }
  const pricenumber = price*orders
 

  const [user, loading, error] = useAuthState(auth);
  const handleOrder = event => {
      event.preventDefault();
   

      const order = {
          orderId: detailItem._id,
          order: detailItem.title,
          quantity:orders,
          singlePrice:price ,
          totalprice:pricenumber,
          email: user.email,
          Name: user.displayName,
          
      }

      fetch('http://localhost:5000/order', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(order)
      })
          .then(res => res.json())
          .then(data => {
              if(data.success){
                  toast(`order successfull`)
                  
              }
              else{
                  toast.error(`please try again`)
              }
           
          });
  }
    return (
        <div>
        <div className='grid grid-cols-1 container md:grid-cols-2 '>
        <div className='flex justify-center mt-5'>
            <img className='w-8/12 h-auto max-h-[650px]' src={detailItem?.image} alt="" />
        </div>
        <div className='pl-5 mt-5  flex  items-center'>
        <div className='space-y-5'>
        <h1 className='text-2xl font-semibold text-gray-900'>{detailItem?.title}</h1>
        <p >Availability :<span className='bg-gray-300 px-3 py-2 rounded-full mx-2 font-semibold'> {detailItem?.quantity} </span> <span className=' font-semibold'>in stack</span></p>
       
        <p className='text-2xl font-semibold  '>Price : <span className='text-emerald-600'>${pricenumber}</span> </p>
        <div className='flex items-center'>
            <p>order</p>
            <div>
                <input 
                className='bg-gray-500 h-7 text-center text-white w-7 mx-3' 
               
                onChange={orderHandle}
                value={orders}
                ref={inputOrder} 
                type="text" />
            <label onClick={handleOrder} className='border px-5 py-2 bg-emerald-600 text-white'>Order now</label>
            </div>
        </div>
        <div className=' w-10/12'>
            <p>{detailItem?.discribtion}</p>
        </div>
        
       

        </div>
        </div>

    </div>
   {/* <PurchaseModel 
   pricenumber={pricenumber}
   detailItem={detailItem}
   order={order}
   ></PurchaseModel> */}
    </div>
    );
};

export default ProductDetails;