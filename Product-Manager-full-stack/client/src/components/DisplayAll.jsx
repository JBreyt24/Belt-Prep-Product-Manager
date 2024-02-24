import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';





const DisplayAll = (props) => {
    const {productList, setProductList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/allProducts")
        .then ((res) => {
            console.log(res)
            console.log(res.data)
            setProductList(res.data)
        })
        .catch ((err) => {
            console.log(err);
        })
}, [])


    const deleteHandler = (idFromMap) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${idFromMap}`)
        .then((res) => {
            console.log(res.data)
            setProductList(productList.filter((product) => product._id !== idFromMap))
        })
        .catch ((err) => {
            console.log(err);
        })
    }



    return(

        <div>
            <Link to={"/"}><button className='admit-btn'>Admit Patient</button></Link>
            <h2>
                All Patients:
            </h2>
            {/* Can't use <a> tags in Single Page Applications so you will need to import {Link}
            so that the product titles are clickable and route to new page  */}
            {
                productList.map((product, index) => (
                    // Getting product by _id
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <Link to={`/product/updateProduct/${product._id}`} ><button className='edit-btn'>Edit</button></Link>
                        <button className='delete-btn' onClick={() => deleteHandler(product._id)}>Delete</button>
                    </div>
                ))

            }
        </div>
    )
}

export default DisplayAll;