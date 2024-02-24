import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const CreateProduct = (props) => {
    const{productList, setProductList} = props;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        const newProduct = {title, description, price}
        axios.post("http://localhost:8000/api/createProduct", newProduct)
            .then((res) => {
                console.log(res)
                console.log(res.data);
                // These next 3 lines will reset our form to empty on refresh or submit
                setTitle("");
                setDescription("");
                setPrice("");
                // using the spread operator(...) to make a copy of everything inside state
                setProductList([...productList, res.data])
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }

    return (

        // CREATE FORM

        <div>
            <Link to={"/displayAllProducts"}><button className='home-btn'>Home</button></Link>
            <h2>Admit Patient</h2>
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

                <button className='submit-btn'>Add</button>

            </form>
        </div>
)}

export default CreateProduct;