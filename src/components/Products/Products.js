import React, { useState } from 'react';
import berry from '../assets/images/products/berry.jpg'
import carrots from '../assets/images/products/carrots.jpg'
import chilli from '../assets/images/products/chili.jpg'
import grapes from '../assets/images/products/grapes.jpg'
import lemons from '../assets/images/products/lemmons.jpg'
import olives from '../assets/images/products/olives.jpg'
import onions from '../assets/images/products/onion.jpg'
import potato from '../assets/images/products/potatoes.jpg'
import pumpkin from '../assets/images/products/pumpkin.jpg'
import Strawberry from '../assets/images/products/staberry.jpg'
import Tomatoes from '../assets/images/products/tomato.jpg'
import Zuccini from '../assets/images/products/zuccini.jpg'
import SingleProducts from '../SingleProducts/SingleProducts';
// import { ClipLoader, CircleLoader, HashLoader } from "react-spinners";


const productsData = [
    {
        name: 'berry',
        img: berry,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'carrots',
        img: carrots,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'chilli',
        img: chilli,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'Grapes',
        img: grapes,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'lemons',
        img: lemons,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'olives',
        img: olives,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'Onions',
        img: onions,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'Potato',
        img: potato,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'Pumpkin',
        img: pumpkin,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'Strawberry',
        img: Strawberry,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'Tomatoes',
        img: Tomatoes,
        description: 'Lorem ipsum dolor sit'

    },
    {
        name: 'Zuccini',
        img: Zuccini,
        description: 'Lorem ipsum dolor sit'

    },
]



const Products = () => {

    return (
        <section>
            <h2 className="text-center mb-3">Buy Products</h2>
            <div className="container">
                <div className="row">
                    {
                        productsData.map(pd => <SingleProducts pd={pd} />)
                    }
                </div>
            </div>
        </section>

    );
};

export default Products;