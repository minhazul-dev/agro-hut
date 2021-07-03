import React, { useEffect, useState } from 'react';
// import berry from '../assets/images/products/berry.jpg'
// import carrots from '../assets/images/products/carrots.jpg'
// import chilli from '../assets/images/products/chili.jpg'
// import grapes from '../assets/images/products/grapes.jpg'
// import lemons from '../assets/images/products/lemmons.jpg'
// import olives from '../assets/images/products/olives.jpg'
// import onions from '../assets/images/products/onion.jpg'
// import potato from '../assets/images/products/potatoes.jpg'
// import pumpkin from '../assets/images/products/pumpkin.jpg'
// import Strawberry from '../assets/images/products/staberry.jpg'
// import Tomatoes from '../assets/images/products/tomato.jpg'
// import Zuccini from '../assets/images/products/zuccini.jpg'
import SingleProducts from '../SingleProducts/SingleProducts';
import { ScaleLoader } from "react-spinners";


// const productsData = [
//     {
//         id: 1,
//         name: 'berry',
//         img: berry,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 2,
//         name: 'carrots',
//         img: carrots,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 3,
//         name: 'chilli',
//         img: chilli,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 4,
//         name: 'Grapes',
//         img: grapes,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 5,
//         name: 'lemons',
//         img: lemons,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 6,
//         name: 'olives',
//         img: olives,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 7,
//         name: 'Onions',
//         img: onions,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 8,
//         name: 'Potato',
//         img: potato,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 9,
//         name: 'Pumpkin',
//         img: pumpkin,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 10,
//         name: 'Strawberry',
//         img: Strawberry,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 11,
//         name: 'Tomatoes',
//         img: Tomatoes,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         id: 12,
//         name: 'Zuccini',
//         img: Zuccini,
//         description: 'Lorem ipsum dolor sit'

//     },
// ]



const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    return (
        <section>

            <h2 className="text-center mb-4 font-weight-bold text-info">Buy Products</h2>
            <div className="container">
                <div className="row">

                    {loading ? <div className="container text-center mt-5 mb-5"> <ScaleLoader /></div> :
                        products.map(pd => <SingleProducts pd={pd} key={products.name} />)
                    }
                </div>
            </div>
        </section>

    );
};

export default Products;