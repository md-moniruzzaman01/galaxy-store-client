import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../../sharedComponents/LoadingScreen';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L3KFtHgrzTwzXbTPuug6SqXFwTgie0DpD4ZilRiqYlD26LAcPCD27bptC1TrKXG394vyzjr8S5d4iJulWiAyQyn00VNpYadf8');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/item/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <LoadingScreen></LoadingScreen>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment.Name}</p>
                    <h2 class="card-title">Please Pay for {appointment.order}</h2>
                   
                    <p>Please pay: ${appointment.totalprice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;