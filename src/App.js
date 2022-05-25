import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/page/Dashboard/Dashboard';
import MyOrder from './Components/page/Dashboard/MyOrder';
import MyReview from './Components/page/Dashboard/MyReview';
import MyProfile from './Components/page/Dashboard/MyProfile';
import MainHomePage from './Components/page/Home/MainHomePage';
import Login from './Components/page/login/Login';
import Signup from './Components/page/login/Signup';
import ProductDetails from './Components/page/Productdetails/ProductDetails';
import Purchase from './Components/page/Purchase/Purchase';
import Navbar from './Components/sharedComponents/Navbar';
import RequireAuth from './Components/sharedComponents/RequireAuth';
import MakeAdmin from './Components/page/Dashboard/MakeAdmin';
import Allorders from './Components/page/Dashboard/Allorders';
import AddProducts from './Components/page/Dashboard/AddProducts';
import ManageProduct from './Components/page/Dashboard/ManageProduct';
import PurchaseModel from './Components/page/Productdetails/PurchaseModel';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainHomePage></MainHomePage>}></Route>
        
        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>
            <Route index element={<MyProfile/>} />
            <Route path='review' element={<MyReview/>}></Route>
            <Route path='order' element={<MyOrder />}></Route>
            <Route path='allorder' element={<Allorders/>}></Route>
            <Route path='add' element={<AddProducts/>}></Route>
            <Route path='manage' element={<ManageProduct/>}></Route>
            <Route path='makeadmin' element={<MakeAdmin/>}></Route>
        </Route>

        <Route path='/product/:id' element={<ProductDetails/> }/>
        <Route path='purchase' element={<PurchaseModel/> }/>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
       
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
