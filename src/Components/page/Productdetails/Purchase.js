import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51L3KFtHgrzTwzXbTPuug6SqXFwTgie0DpD4ZilRiqYlD26LAcPCD27bptC1TrKXG394vyzjr8S5d4iJulWiAyQyn00VNpYadf8');
const Purchase = () => {
    const { id } = useParams();
    const url = `https://gentle-coast-39284.herokuapp.com/details/${id}`;

    const { data: item, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(item);
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, </p>
                    <h2 class="card-title">Please Pay for {item?.title}</h2>
                    <p>Your item: <span className='text-orange-700'></span> at </p>
                    <p>Please pay: ${item?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm item={item} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Purchase;