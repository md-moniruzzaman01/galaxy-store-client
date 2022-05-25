import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingScreen from '../../sharedComponents/LoadingScreen';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const navigate = useNavigate()
        const { data, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));
        if (isLoading) {
            return <LoadingScreen></LoadingScreen>
        }
    if (!data) {
        navigate('/login');
        signOut(auth);
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {data?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         data &&  data.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MakeAdmin;