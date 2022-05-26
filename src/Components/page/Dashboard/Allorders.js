import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingScreen from '../../sharedComponents/LoadingScreen';

const Allorders = () => {
    const { data: orders, isLoading,refetch } = useQuery('services', () => fetch('https://gentle-coast-39284.herokuapp.com/allorder').then(res => res.json()));
    if (isLoading) {
        return <LoadingScreen></LoadingScreen>
    }
    const placeOrder = (id)=>{
            fetch(`https://gentle-coast-39284.herokuapp.com/remove/order/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                const confarm = window.confirm('Delete this item')
                if (confarm) {
                    if(data.deletedCount>0){
                        toast('order placed successfully')
                        refetch();
                    }else{
                        toast('order place s unsuccessfully')
                    }
                }
                
            })
    }

    return (
        <div>
            <h1 className='text-center'>this is manage all orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>title</th>
                            <th>Total price</th>
                            <th>Quantity</th>
                            <th>client</th>
                            <th>email address</th>
                            <th>status</th>
                            <th>controls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          orders.length > 0?  orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.order}</td>
                                <td>{order.totalprice}</td>
                                <td>{order.quantity}</td>
                                <td>{order.Name}</td>
                                <td>{order.email}</td>
                                <td>{

                                    order.paid ? <p className='px-2 py-1 bg-gray-300 rounded-3xl text-center'>paid</p> : <p className='px-2 py-1 bg-gray-300 rounded-3xl text-center'>unpaid</p>
                                    }
                                </td>

                                
                                <td>{
                                    order.paid ? <button onClick={()=>placeOrder(order._id)} className="btn btn-xs">shipped</button> : <p className='btn btn-ghost btn-xs'>pending</p>
                                    }</td>
                               
                            </tr>) : <p className='text-center'>No order found</p>
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allorders;