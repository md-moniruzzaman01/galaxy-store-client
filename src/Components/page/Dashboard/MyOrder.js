import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import LoadingScreen from '../../sharedComponents/LoadingScreen';

const MyOrder = () => {
    const [myorder, setMyOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
const url = `http://localhost:5000/myorder?email=${user.email}`
    useEffect(() => {
        if (user) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setMyOrder(data);
                });
        }
    }, [])
//     const { data:myorder, isLoading, refetch } = useQuery('users', () => fetch(url, {
//         method: 'GET',
//         headers:{
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     }).then(res => {
//         console.log('res', res);
//         if (res.status === 401 || res.status === 403) {
//             signOut(auth);
//             localStorage.removeItem('accessToken');
//             navigate('/');
//         }
//         return res.json()
//     }));


// if (isLoading) {
//     return <LoadingScreen></LoadingScreen>
// }





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
                    
                   
                }else{
                    toast('order place s unsuccessfully')
                }
            }
            
        })
}
    
    return (
        <div>
            <h1 className='text-center text-3xl'>my orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>title</th>
                            <th>Single price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>name</th>
                            <th>payment status</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorder.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.Name}</td>
                                <td>{order.order}</td>
                                <td>{order.singlePrice}</td>
                                <td>{order.quantity}</td>
                                <td>{order.totalprice}</td>
                                <td>
                                    {
                                        order.transactionId ? <small> {order.transactionId}</small> : <p>-</p>
                                    }
                                </td>
                                
                                <td>
                                   {
                                       order.paid ? 
                                           <p className='btn btn-xs btn-ghost'>Paid</p>:
                                          
                                       <div className='flex'>
                                       <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>
                                       <button className='btn btn-xs' onClick={()=>placeOrder(order._id)}> remove</button>
                                       </div> 
                                   }
                                </td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;