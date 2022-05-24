import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { format } from 'date-fns';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import LoadingScreen from '../../sharedComponents/LoadingScreen';
const PurchaseModel = () => {
    const [user, loading, error] = useAuthState(auth);
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const orders = new URLSearchParams(search).get('order');
    const date = new Date()
    const { data: item, isLoading, refetch } = useQuery('services', () => fetch(`http://localhost:5000/details/${id}`).then(res => res.json()));
    const navigate = useNavigate()

    if (isLoading) {
        <LoadingScreen />
    }


    const pricenumber = item?.price * orders

    const handleOrder = event => {
        event.preventDefault();

        if (item.quantity >= orders) {

            const order = {
                orderId: item._id,
                order: item.title,
                quantity: item.quantity,
                singlePrice: item.price,
                totalprice: pricenumber,
                address: event.target.address.value,
                phone: event.target.phone.value,
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
                    if (data.success) {
                        toast(`order successfull`)
                        const updateQuantity = item?.quantity - orders
                        const url = `http://localhost:5000/update/${item?._id}`
                        fetch(url, {

                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',

                            },
                            body: JSON.stringify({ quantity: updateQuantity })

                        })
                            .then(res => res.json())
                            .then(data => {
                                //    console.log(data)
                            })
                        refetch()
                        navigate('/dashboard/order')
                    }
                    else {
                        toast.error(`please try again`)
                    }

                });
        }
    }
    return (
        <div className='min-h-screen'>
            <div className='flex justify-center items-center'>
                {/* <input type="checkbox" id="order-model" className="modal-toggle" /> */}
                {/* <div className="modal modal-bottom sm:modal-middle"> */}
                <div className="modal-box">
                    {/* <label htmlFor="order-model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <p className='text-sky-600'>Almost there...</p>
                        <p className='w-full max-w-lg'>Date : {format(date, "PP")}</p>
                        <h2 className='w-full max-w-lg  font-bold'>Product name : <span className='text-base font-normal'>{item?.title}</span></h2>
                        <p className='w-full max-w-lg text-base'><span className='font-bold'>single price : </span> ${item?.price}</p>
                        <p className='w-full max-w-lg text-base'><span className='font-bold'>Order Number : </span> {orders}</p>
                        <p className='w-full max-w-lg text-base'><span className='font-bold'>Total Price :</span>  ${pricenumber}</p>

                        <input type="text" disabled value={user?.displayName} className="input input-bordered w-full max-w-lg" />
                        <input type="email" value={user?.email} disabled className="input input-bordered w-full max-w-lg" />
                        <input type="number" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-lg" required />
                        <input type="text" name='address' placeholder="Your address..." className="input input-bordered w-full max-w-lg" required />

                        <input type="submit" value="Pay now" className="btn bg-green-800 text-white border-0 w-full max-w-lg" />
                    </form>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default PurchaseModel;