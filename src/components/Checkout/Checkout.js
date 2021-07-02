import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {

    const { _id } = useParams()
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products`
        fetch(url)
            .then(response => response.json())
            .then((data) => setDetails(data))
    }, [])
    return (
        <div>
            <h4>this is checkout</h4>
        </div>
    );
};

export default Checkout;