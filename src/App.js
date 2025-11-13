import react from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Home from './componants/Home';
import Login from './componants/Login';
import Register from './componants/Register';
import Addproduct from './componants/Addproduct';
import Userhome from './componants/Userhome';
import Adminhome from './componants/Adminhome';
import Customize from './componants/Customize';
import Adminlogin from './componants/Adminlogin';


function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/addproduct' element={<Addproduct/>}/>
  <Route path='/userhome' element={<Userhome/>}/>
  <Route path='/adminhome' element={<Adminhome/>}/>
  <Route path='/customize' element={<Customize/>}/>
  <Route path='/adminlogin' element={<Adminlogin/>}/> 
   </Routes>
   </BrowserRouter>
  );
}

export default App;
