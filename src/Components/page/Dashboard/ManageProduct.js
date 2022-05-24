import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingScreen from '../../sharedComponents/LoadingScreen';

const ManageProduct = () => {
    
    const { data: products, isLoading,refetch } = useQuery('services', () => fetch('http://localhost:5000/all').then(res => res.json()));
    if (isLoading) {
        return <LoadingScreen></LoadingScreen>
    }
    const removeProduct = (id)=>{
            fetch(`http://localhost:5000/remove/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                const confarm = window.confirm('Delete this item')
                if (confarm) {
                    if(data.deletedCount>0){
                        toast('products remove successfully')
                        refetch();
                    }else{
                        toast('products removeing unsuccessfully')
                    }
                }
                
            })
    }
    return (
        <div>
            <h1 className='text-center mt-16 '>this is manage product {products.length}</h1>
            
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>title</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Upload by</th>
                            <th>controls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.title}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.uploader}</td>
                                <td><button onClick={()=>removeProduct(order._id)} class="btn btn-xs">remove</button></td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default ManageProduct;