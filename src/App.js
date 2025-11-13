import react from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Home from './componants/Home';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home/>}/>
  
   </Routes>
   </BrowserRouter>
  );
}

export default App;
