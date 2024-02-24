import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';



const DisplayOneProduct = (props) => {

    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});
    const navigate = useNavigate();


    useEffect (() => {
        // referencing back to the controller: Product.findOne({_id: req.params.id})
        // the next line is how we are connecting this together
        axios.get(`http://localhost:8000/api/findOneProduct/${id}`)
        .then((res) => {
            console.log(res)
            console.log(res.data)
            // clear state with the next line
            setOneProduct(res.data);
        })
        .catch ((err) => {
            console.log(err);
        })
        
    }, [id])


    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then((res) => {
            console.log(res.data)
            navigate('/')
        })
        .catch ((err) => {
            console.log(err);
        })
    }


    return(

        <div className='displayOne-page'>
            <Link to={"/displayAllProducts"}><button className='home-btn'>Home</button></Link>
            <Link to={"/product/updateProduct/:id"}><button className='edit-btn'>Update Records</button></Link>
            <h2 className='displayOne-header'>{oneProduct.title}</h2>
            <p>Description: {oneProduct.description}</p>
            <p>Price: ${oneProduct.price}</p>
            <button className='delete-btn' onClick={deleteHandler}>Delete</button>
        </div>

    )
}

export default DisplayOneProduct;