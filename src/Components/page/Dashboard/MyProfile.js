import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import LoadingScreen from '../../sharedComponents/LoadingScreen';

const MyProfile = () => {
    const [edit, setEdit] = useState(true)
    const navigate = useNavigate()
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const [user, loading, error] = useAuthState(auth);
//    if (loading) {
//     return <LoadingScreen></LoadingScreen>
//    }
  
    const { data:profile, isLoading, refetch } = useQuery('users', () => fetch(`https://gentle-coast-39284.herokuapp.com/profile`, {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading || loading ||updating) {
        return <LoadingScreen></LoadingScreen>
    }
    
    const prifileIcon = <FaUser />
    const editHandle = (e) => {
        e.preventDefault();
        const phone = e.target.phone.value;
        const education = e.target.education.value;
        const location = e.target.location.value;
        const company = e.target.company.value;
        const name = e.target.displayName.value;
        const updateinfo = {
            phone: phone,
            education: education,
            location: location,
            company: company
        }
        updateProfile({ displayName: name })
       
         const url =`https://gentle-coast-39284.herokuapp.com/update/info/${user.email}`
        fetch(url,{
       
             method: 'PUT',
             headers: { 
                 'Content-Type': 'application/json',
                
             },
             body: JSON.stringify(updateinfo)
        
        })
        .then(res=> res.json())
        .then(data=>{
            if (data.acknowledged) {
                toast(`update successfull`)
               
                
                setEdit(true)

            }
            else {
                toast.error(`try again`)
            }
        })
        refetch()
        
       
    }
        
    console.log(profile);
    
    return (
        <>
         <form className='min-h-screen' onSubmit={editHandle}>
         <div className='bg-gray-200  flex justify-center items-center h-96'>
                <div className='flex flex-col justify-center items-center lg:flex-row ' >
                    <div className=' bg-gray-200 rounded-full mr-0  w-44 h-44 flex justify-center items-center text-white font-semibold border-2 border-white text-8xl md:mr-16'> <h1>{prifileIcon}</h1> </div>
                    <div className='flex flex-col justify-center mt-11 text-md space-y-3 text-gray-800 md:text-xl md:mt-0'>

                        <div>
                            {
                                edit ? <p>Name : <span className='font-medium'>{user?.displayName}</span></p> :
                                    <div class="form-control">
                                        <label class="input-group">
                                            <span>Name</span>
                                            <input type="text" name='displayName' placeholder={user?.displayName} class="input input-bordered" />
                                        </label>
                                    </div>
                            }
                        </div>
                        <p>Email : <span className='font-medium'>{user?.email}</span></p>
                    </div>
                </div>
            </div>
            <div className=' w-8/12 mx-auto mt-5 space-y-5'>
                
                {
                                edit ? <p>Phone :  <span className='font-medium'>{profile?.phone || '*********'}</span></p> :
                                    <div class="form-control">
                                        <label class="input-group">
                                            <span>Phone</span>
                                            <input type="text" name='phone' placeholder={profile?.phone || '*********'} class="input input-bordered" />
                                        </label>
                                    </div>
                  }
                {
                                edit ? <p>Education :  <span className='font-medium'>{profile?.education||'*************'}</span></p> :
                                    <div class="form-control">
                                        <label class="input-group">
                                            <span>Education</span>
                                            <input type="text" name='education' placeholder={profile?.education||'*************'} class="input input-bordered" />
                                        </label>
                                    </div>
                  }
                {
                                edit ? <p> Location :  <span className='font-medium'>{profile?.location|| '*************'}</span></p> :
                                    <div class="form-control">
                                        <label class="input-group">
                                            <span>Location</span>
                                            <input type="text" name='location' placeholder={profile?.location|| '*************'} class="input input-bordered" />
                                        </label>
                                    </div>
                  }
                {
                                edit ? <p> Company Name :  <span className='font-medium'>{profile?.company|| '*************'}</span></p> :
                                    <div class="form-control">
                                        <label class="input-group">
                                            <span>Company Name</span>
                                            <input type="text" name='company' placeholder={profile?.company|| '*************'} class="input input-bordered" />
                                        </label>
                                    </div>
                  }
            </div>
            <div className='mt-11  flex justify-end container mx-auto '>
                {edit ? <button onClick={() => setEdit(false)} className='bg-gray-300 px-7 py-2 rounded-3xl text-xl text-gray-800 font-medium mr-5 '>Edit</button> :
                   <div>
                        <input  type='submit' className='bg-gray-300 px-7 py-2 rounded-3xl text-xl text-gray-800 font-medium mr-5 ' value='save'/>
                        <button onClick={() => setEdit(true)} className='bg-gray-300 px-7 py-2 rounded-3xl text-xl text-gray-800 font-medium mr-5 '>X</button>
                   </div>
                    
                }
            </div>
         </form>
        </>
    );
};

export default MyProfile;