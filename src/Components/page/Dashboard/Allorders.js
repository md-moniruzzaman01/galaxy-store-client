import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingScreen from '../../sharedComponents/LoadingScreen';

const Allorders = () => {
    const { data: orders, isLoading,refetch } = useQuery('services', () => fetch('http://localhost:5000/allorder').then(res => res.json()));
    if (isLoading) {
        return <LoadingScreen></LoadingScreen>
    }
    const placeOrder = (id)=>{
            fetch(`http://localhost:5000/remove/order/${id}`,{
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
    console.log(orders);
    return (
        <div>
            <h1 className='text-center mt-44 '>this is manage all orders</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>title</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>client</th>
                            <th>email address</th>
                            <th>controls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.order}</td>
                                <td>{order.totalprice}</td>
                                <td>{order.quantity}</td>
                                <td>{order.Name}</td>
                                <td>{order.email}</td>
                                
                                <td><button onClick={()=>placeOrder(order._id)} class="btn btn-xs">Place order</button></td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allorders;