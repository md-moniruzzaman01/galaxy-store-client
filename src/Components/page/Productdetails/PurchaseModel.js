import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { format } from 'date-fns';
const PurchaseModel = ({orders,item,pricenumber}) => {
      const [user, loading, error] = useAuthState(auth);
      const date = new Date ()
      
  const handleOrder = event => {
      event.preventDefault();
   

      const order = {
          orderId: item._id,
          order: item.title,
          quantity:item,
          singlePrice:item.price ,
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
              <div>
            <input type="checkbox" id="order-model" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form  className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <p className='text-sky-600'>Almost there...</p>
                        <p className='w-full max-w-lg'>Date : {format(date, "PP")}</p>
                        <h2 className='w-full max-w-lg  font-bold'>Product name : <span className='text-base font-normal'>{item?.title}</span></h2>
                        <p className='w-full max-w-lg text-base'><span className='font-bold'>single price : </span> ${item?.price}</p>
                        <p className='w-full max-w-lg text-base'><span className='font-bold'>Order Number : </span> {orders}</p>
                        <p className='w-full max-w-lg text-base'><span className='font-bold'>Total Price :</span>  ${pricenumber}</p>

                        <input  type="text" disabled value={user?.displayName}  className="input input-bordered w-full max-w-lg" />
                        <input type="email" value={user?.email} disabled className="input input-bordered w-full max-w-lg" />
                        <input type="number" placeholder="Phone number" className="input input-bordered w-full max-w-lg" required/>
                        <input type="text" placeholder="Your address..." className="input input-bordered w-full max-w-lg" required/>
                        
                        <input type="submit" value="Pay now" className="btn bg-green-800 text-white border-0 w-full max-w-lg" />
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PurchaseModel;