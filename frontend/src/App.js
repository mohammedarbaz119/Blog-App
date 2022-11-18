import { Route, Routes } from 'react-router-dom';
import './'
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Login from './Login';
import Products from './Products';
import Product from "./Product";
import Notfound from './Notfound';
// import Pro from './Pro';
import NewBlog from './NewBlog';
import Allblogs from './Allblogs';
import SingleBlog from './SingleBlog';
import Register from './Register';

function App() {
    const [user,setuser]=useState(null)
 return (

    <div>
       
    
    <Navbar/>
    <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/register' index element={<Register/>}/>
        {/* <Home/> */}
        <Route path='products'>
            <Route index element={<Products/>}/>
            <Route path=':id' element={<Product/>}/>
        </Route>
        <Route path='/blogs' >
            <Route index element={<Allblogs/>}/>
            <Route path=':id' element={<SingleBlog/>}/>
        </Route>
        <Route path={'blog/new'} element={<NewBlog/>}/>
        <Route path='*' element={<Notfound/>}/>
    </Routes>
   
    {/* <Routes>
        <Route path='/products' element={<h1>extra</h1>}>
        </Route>
        </Routes> */}
    </div>
    
 )
}

export default App;
