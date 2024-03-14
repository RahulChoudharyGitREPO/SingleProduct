import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const [Error, setError] = useState()
    const { id } = useParams()


    useEffect(() => {
        const singleProduct = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                setError('Error fetching data', Error); // Pass the actual error object
            }
        };

        singleProduct();

    }, [id]);





    return <div>

        <h1 className='singleproduct'>Single Product</h1>

        {product && (
            <div className="product-info" >
                <h1 className='product-title' >name:{product.title}</h1>
                <h3>Price{product.price}</h3>
                <p>discountPercentage:{product.discountPercentage}</p>
                <img src={product.thumbnail} alt="" />
            </div>
        )}

    </div>;
};


export { SingleProduct };