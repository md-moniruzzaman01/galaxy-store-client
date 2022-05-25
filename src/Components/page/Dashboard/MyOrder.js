import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [myorder, setMyOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myorder?email=${user.email}`, {
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
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;