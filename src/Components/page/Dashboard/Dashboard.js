import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import LoadingScreen from '../../sharedComponents/LoadingScreen';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (adminLoading) {
    return <LoadingScreen></LoadingScreen>
  }

  const adminDashboard =
    <>
      <li><Link to='/dashboard/allorder'>Manage all Order</Link></li>
      <li><Link to='/dashboard/add'>Add a Product</Link></li>
      <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
      <li><Link to='/dashboard/manage'>Manage Product</Link></li>

    </>
  const userDashboard =
    <>
      <li><Link to='/dashboard'>My Order</Link></li>
      <li><Link to='/dashboard/review'>My Review</Link></li>
    </>

  return (
    <div>

      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <h1 className='text-center mt-11 text-3xl'>Dashboard </h1>
          <Outlet />


        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <li><Link to='/dashboard/profile'>My Profile</Link></li>
              {
                admin ? adminDashboard : userDashboard
              }
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;