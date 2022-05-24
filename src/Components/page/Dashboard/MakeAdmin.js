import React from 'react';
import { useQuery } from 'react-query';
import LoadingScreen from '../../sharedComponents/LoadingScreen';
import UserRow from './UserRow';

const MakeAdmin = () => {
    
        const { data, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));
        if (isLoading) {
            return <LoadingScreen></LoadingScreen>
        }
    
    return (
        <div>
            <h2 className="text-2xl">All Users: {data.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                           data.map(user=><UserRow
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