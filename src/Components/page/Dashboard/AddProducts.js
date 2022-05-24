import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddProducts = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '14b55bbfa5e9acca4a0e83855015b670';
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        console.log(url);
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const product = {
                    title: data.title,
                    email: data.email,
                    price: data.price,
                    quantity: data.quantity,
                    discription: data.discription,
                    img: img
                }
                // send to your database 
                fetch('http://localhost:5000/addproduct', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('product added successfully')
                        
                    }
                    else{
                        toast.error('Failed to add the product');
                    }
                })

            }
            
        })
    }
    return (
        <div className='min-h-screen'>
           <h1 className='underline text-center my-5 text-2xl font-semibold'>Add product </h1>
            <div className='flex justify-center items-center'>
            
            <form className='w-8/12 max-w-lg' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product title here..."
                        className="input input-bordered w-full max-w-lg"
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Title is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Product Price here..."
                        className="input input-bordered w-full max-w-lg"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Product Quantity here..."
                        className="input input-bordered w-full max-w-lg"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Discription</span>
                    </label>
                    <textarea placeholder="Product title here..."
                        className="input input-bordered w-full max-w-lg"
                    name="discription" id="" cols="30" rows="10"
                    {...register("discription", {
                        required: {
                            value: true,
                            message: 'Discription is Required'
                        }
                    })}
                    />
                    
                    <label className="label">
                        {errors.discription?.type === 'required' && <span className="label-text-alt text-red-500">{errors.discription.message}</span>}
                    </label>
                </div>



                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        value={user?.email}
                        disabled
                        className="input input-bordered w-full max-w-lg"
                        
                    
                    />
                    
                </div>

               

                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-lg"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-lg text-white' type="submit" value="Add" />
            </form>
        </div>
        </div>
    );
};

export default AddProducts;