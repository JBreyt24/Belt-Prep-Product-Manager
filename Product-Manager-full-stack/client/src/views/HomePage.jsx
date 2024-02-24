import React, { useState, useEffect } from 'react';
import CreateProduct from '../components/CreateProduct';
import DisplayAll from '../components/DisplayAll';



const HomePage = (props) => {
    const [productList, setProductList] = useState([]);

    return (
        <>
            {/* <CreateProduct productList = {productList} setProductList = {setProductList}/> */}
            <DisplayAll productList = {productList} setProductList = {setProductList}/>
        </>
)}

export default HomePage;