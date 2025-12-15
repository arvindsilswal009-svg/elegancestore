
import './App.css';
import  Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/Shop';import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
<Route path='/mens' element={<Shopcategory category="men"/>}/>
<Route path='/womens' element={<Shopcategory  category="women"/>} />
<Route path='/kids' element={<Shopcategory  category="kid"/>}/>
<Route path='/product' element={<Product/>}/>
<Route path=':productId' element={<Product/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     
     
    </div>
  );
}

export default App;
