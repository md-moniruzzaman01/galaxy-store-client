import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const PurchaseModel = ({order,detailItem,pricenumber}) => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    return (
        <div>
              <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form  className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <h2 className='w-full max-w-xs text-xl font-bold'>{detailItem?.title}</h2>
                        <p className='w-full max-w-xs text-base'>Order :  {order}</p>
                        <p className='w-full max-w-xs text-base'>Price:  {pricenumber}</p>

                        <input  type="text" disabled value={user?.displayName}  className="input input-bordered w-full max-w-xs" />
                        <input type="email" value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Pay now" className="btn bg-green-800 text-white border-0 w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PurchaseModel;