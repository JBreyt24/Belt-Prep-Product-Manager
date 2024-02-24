import { useState, useEffect } from 'react'
import './App.css'
import CreateProduct from './components/CreateProduct';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import HomePage from './views/HomePage';
import UpdateProduct from './components/UpdateProduct';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Can't display two components at the same path so import 
// a VIEW component that contains the two components to display together

function App() {
  return (
    <>
    <h1>Hospital Manager</h1>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateProduct/>}/>
          <Route path="/product/:id" element={<DisplayOne/>}/>
          <Route path="/product/updateProduct/:id" element={<UpdateProduct/>}/>
          <Route path='/displayAllProducts' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
