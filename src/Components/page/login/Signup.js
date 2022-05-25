import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import LoadingScreen from '../../sharedComponents/LoadingScreen';

const Signup = () => {
    const navigate= useNavigate()
    let location = useLocation();
      let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [ createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token]=useToken(user || guser)
    useEffect(()=>{
        if (token) {
            navigate(from,{replace:true});
            
        }
    },[token,from,navigate])
      let signInError;
      if (loading|| gloading || updating) {
        return <LoadingScreen></LoadingScreen> 
      }
      if (error || gerror || updateError) {
        signInError = <p className='text-red-500 '>{error?.message ||gerror?.message || updateError?.message}</p>
      }
      if (user || guser) {
        navigate(from, { replace: true })
      }
    const onSubmit = async(data) => {
        await createUserWithEmailAndPassword(data.email,data.password)
        await updateProfile({ displayName: data.name })
        
        if((!error && user) || !updateError ){
            toast("Account created successfully")

        }

       
    }
  
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    {/* input form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* email filed */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">What is your Name?</span></label>
                            <input type="name" {...register("name", {
                                required:{value: true,message:'Name is Required'}
                            })} placeholder="Your Name " className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                            
                             </label>
                        </div>
                        {/* email filed */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">What is your email?</span></label>
                            <input type="email" {...register("email", {
                                required:{value: true,message:'Email is Required'},
                                pattern: {value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,message: 'provide a valid email'}
                            })} placeholder="your email " className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                             </label>
                        </div>
                            {/* password fild */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">your password</span></label>
                            <input type="password" {...register("password", {
                                required:{value: true,message:'password is Required'},
                                minLength: {value:6,message: 'password must have 6 ceracter'}
                            })} placeholder="your password " className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                    
                        {/* signin error */}
                        <div>{signInError }</div>
                        {/* submite form btn */}
                        <input className='btn w-full max-w-x text-white' value='Sign up'  type="submit" />
                    </form>
                    <p>Already have an account?  
                        <Link className='text-sky-600' to="/login">Login</Link> 
                    </p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;