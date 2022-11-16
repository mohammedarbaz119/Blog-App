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
import { Usercontext } from './Usercontext';
// const person={
//     name:"arbaz",
//     age:20,
//     skills:["html","css","js"]
// }

// const link = "http://google.com"
function App() {
    const [user,setuser]=useState(null)
 return (

    <div>
       
    <Usercontext.Provider value={{user,setuser}}>
    <Navbar/>
    <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
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
    </Usercontext.Provider>
    {/* <Routes>
        <Route path='/products' element={<h1>extra</h1>}>
        </Route>
        </Routes> */}
    </div>
    
 )
}

export default App;
