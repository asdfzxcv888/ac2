
import './App.css';
import { useGlobalContext } from './globalcontext/useGlobalContext';
import Login from './components/Login';
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Account from './components/Account';
import Cart from './components/Cart';
import ProductDetailsPage from './components/ProductDetailsPage';
import Alert from './components/Alert';
import PaymentPage from './components/Payment';
import Redirect from './components/Redirect';


function App() {
  const{user}=useGlobalContext()



 if(!user){

  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<>
      <Alert></Alert>
      <Navbar></Navbar>
      <Outlet></Outlet></>}>

      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='*' element={<Redirect/>} ></Route>
      
      </Route>
     
      
      


    </Routes>
    
    
    
    </BrowserRouter>
    </>
  );}
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<>
      <Alert></Alert>
      <Navbar></Navbar>
      <Outlet></Outlet></>}>

      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/account' element={<Account/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/selectedproduct' element={<ProductDetailsPage/>}></Route>
      <Route path='/payment' element={<PaymentPage/>}></Route>






      </Route>
      


    </Routes>
    
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
