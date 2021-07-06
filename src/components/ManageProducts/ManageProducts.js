import React, { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://thawing-fjord-24286.herokuapp.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                console.log(data);
                setLoading(false)
            })

    }, [])

    const deleteProduct = id => {
        const url = `https://thawing-fjord-24286.herokuapp.com/deleteProduct/${id}`;
        fetch((url), {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(response => {
                if (response) {
                    alert('Product Deleted successfully')
                }
                // console.log('deleted successfully', results);
            })
        // console.log('btn clicked', id);

    }
    return (
        <section>
            <div className="row">
                {loading ? <div className="container text-center mt-5 mb-5"> <ScaleLoader /></div> :
                    products.map((product) =>
                        <div className="container mt-5 col-md-3 mt-5">
                            <div className="card m-4" style={{ width: '18rem' }}>

                                <img src={product.image} className="card-img-top" alt="failed to load image" />

                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text"> Price: {product.price}</p>
                                    <button onClick={() => deleteProduct(product._id)} type="button" class="btn btn-warning">Delete</button>
                                </div>
                            </div>


                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default ManageProducts;