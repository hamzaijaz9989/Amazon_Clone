
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
function App() {
  return (
   <> 
  
   <Routes>
   <Route exact path='/' element={<Home/>} />
    <Route exact path="/checkout" element={<Checkout/>}/>
    <Route exact path="/login" element={<Login/>}/>
   
  
       </Routes>
   </>
  );
}

export default App;
