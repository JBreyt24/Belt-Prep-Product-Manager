import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';




const UpdateProduct = (props) => {
    // calling id from app.jsx from the routes
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneProduct/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTitle(res.data.title)
            setDescription(res.data.description)
            setPrice(res.data.price)
        })
        .catch ((err) => {
            console.log(err);
        })

    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/updateProduct/${id}`, {
            title,
            description,
            price
        })
        .then((res) => {
            console.log(res);
            console.log(res.data)
            navigate('/')
        })
        .catch ((err) => {
            console.log(err);
            setErrors(err.response.data.errors)
        })
    }

    return (

        // UPDATE FORM

        <div>
            <Link to={"/displayAllProducts"}><button className='home-btn'>Home</button></Link>
            <h2>Update Product</h2>
            <form onSubmit={submitHandler}>

                <div className='form-fields'>
                    <label>Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    {
                    errors.title?
                    <p className='errors'>{errors.title.message}</p>:
                    null
                }
                </div>

                <br/>

                <div className='form-fields'>
                    <label>Description: </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
                    {
                    errors.description?
                    <p className='errors'>{errors.description.message}</p>:
                    null
                }
                </div>

                <br/>

                <div className='form-fields'>
                <label>Price: </label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/>
                    {
                    errors.price?
                    <p className='errors'>{errors.price.message}</p>:
                    null
                }
                </div>

                <br/>

                <button className='submit-btn'>Update</button>

            </form>

        </div>


    )
}

export default UpdateProduct;