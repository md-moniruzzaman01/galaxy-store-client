import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import LoadingScreen from '../../sharedComponents/LoadingScreen'
import useToken from '../../../hooks/useToken';


const Login = () => {

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const navigate= useNavigate()
    const [token]=useToken(user || guser)
    let location = useLocation();
      let from = location.state?.from?.pathname || "/";
      let signInError;
      useEffect(()=>{
          if (token) {
              navigate(from,{replace:true});
              
          }
      },[token,from,navigate])
      if (loading|| gloading) {
        return <LoadingScreen></LoadingScreen>
      }
      if (error || gerror) {
        signInError = <p className='text-red-500 '>{error?.message ||gerror?.message}</p>
      }

    const onSubmit = data => {
    signInWithEmailAndPassword(data.email,data.password)
       
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    {/* input form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input className='btn w-full max-w-xs text-white' value='Login'  type="submit" />
                    </form>
                    <p>New to <span className='font-bold'>Galaxy Shop</span> 
                        <Link className='text-sky-600' to="/signup"> Create new account</Link> 
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

export default Login;