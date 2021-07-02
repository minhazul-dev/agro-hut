import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';



const AddProducts = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    // const onSubmit = data => console.log(data);
    const onSubmit = data => {
        console.log(data)
        const productData = {
            name: data.name,
            price: data.price,
            image: imageUrl
        }
        const url = `http://localhost:5000/addProducts`
        console.log(productData);
        fetch(url, {
            method: 'POST',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(response => console.log('server side response', response))
    }

    // console.log(watch("example")); 

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '69af5a6ddaad5f8684bcb38c9c01288d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)

            .then(function (response) {
                setImageUrl(response.data.data.display_url);
                // setImageUrl(response.data.data.display_url);
                // if (response) {
                //     console.log(response);
                // }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <section style={{ backgroundColor: '#9CC3D5FF', height: '700px' }}>
            <h3 className="text-center">Here Add Products</h3>
            <div className="container mx-auto mt-5 form-group">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" defaultValue="name" {...register("name")} />
                    <input className="form-control mt-3 mb-3" defaultValue="price" {...register("price")} />
                    <textarea className="form-control mt-3 mb-3" defaultValue="description" {...register("description")} />

                    <input className="form-control mt-3 mb-3" onChange={handleImageUpload} type="file" />

                    <input className="mt-4" type="submit" />
                </form>
            </div>
            <div className="container text-center">
                <a href="/"> <button type="button" className="btn btn-outline-success">HOME</button></a>
            </div>
        </section>
    );
};

export default AddProducts;