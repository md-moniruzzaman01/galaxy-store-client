import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FaUser } from "react-icons/fa";

const MyProfile = () => {
    const [edit, setEdit] = useState(true)
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
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
        
         const url =`http://localhost:5000/update/info/${user.email}`
        fetch(url,{
       
             method: 'PUT',
             headers: { 
                 'Content-Type': 'application/json',
                
             },
             body: JSON.stringify(updateinfo)
        
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
        })
        
        
       
    }
        
    
    
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
                                edit ? <p>Phone :  <span className='font-medium'>{'*************'}</span></p> :
                                    <div class="form-control">
                                        <label class="input-group">
                                            <span>Phone</span>
                                            <input type="text" name='phone' placeholder="phone number" class="input input-bordered" />
                                        </label>
                                    </div>
                  }
                {
                                edit ? <p>Education :  <span className='font-medium'>{'*************'}</span></p> :
                                    <div class="form-control">
                                        <label class="input-group">
                                            <span>Education</span>
                                            <input type="text" name='education' placeholder="phone number" class="input input-bordered" />
                                        </label>
                                    </div>
                  }
                {
                                edit ? <p> Location :  <span className='font-medium'>{'*************'}</span></p> :
                                    <div class="form-control">
                                        <label class="input-group">
                                            <span>Location</span>
                                            <input type="text" name='location' placeholder="phone number" class="input input-bordered" />
                                        </label>
                                    </div>
                  }
                {
                                edit ? <p> Company Name :  <span className='font-medium'>{'*************'}</span></p> :
                                    <div class="form-control">
                                        <label class="input-group">
                                            <span>Company Name</span>
                                            <input type="text" name='company' placeholder="phone number" class="input input-bordered" />
                                        </label>
                                    </div>
                  }
            </div>
            <div className='mt-11  flex justify-end container mx-auto '>
                {edit ? <button onClick={() => setEdit(false)} className='bg-gray-300 px-7 py-2 rounded-3xl text-xl text-gray-800 font-medium mr-5 '>Edit</button> :
                    <input  type='submit' className='bg-gray-300 px-7 py-2 rounded-3xl text-xl text-gray-800 font-medium mr-5 ' value='save'/>
                    
                }
            </div>
         </form>
        </>
    );
};

export default MyProfile;