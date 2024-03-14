import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Product() {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products`);
                setData(response.data.products);
                console.log(response.data.products);
            } catch (error) {
                setError('Error fetching data')
            } finally {
                setLoading(false);
            }
        }

        fetchData();


        return () => {

        };
    }, [])

    if (loading) return <h1>Loading...</h1>
    if (error) return <p>error:{error}</p>

    return (
        <>
            <h1>Products</h1>
            {data.map(products => (
                <Link key={products.id} to={`/product/${products.id}`}>
                    <div className="wrapper">
                        <div className='container'>
                            <div className='child' >
                                <img src={products.thumbnail} alt={products.title} />
                                <h3>{products.title}</h3>
                                <p>{products.description}</p>
                                <p>Price:  {products.price}</p>

                            </div>
                        </div>

                    </div>
                </Link >
            ))
            }

        </>
    )
}

export default Product
