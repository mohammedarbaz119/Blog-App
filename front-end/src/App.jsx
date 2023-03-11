import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Notfound from './components/Notfound';
import NewBlog from './components/NewBlog';
import Allblogs from './components/Allblogs';
import SingleBlog from './components/SingleBlog';
import Register from './components/Register';
import { useUsercontext } from './context/Usercontext';

function App() {
    const {state,dispatch} = useUsercontext()
 return (

    <div>
       
    
    <Navbar/>
    <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' index element={<Register/>}/>
        {/* <Home/> */}

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
