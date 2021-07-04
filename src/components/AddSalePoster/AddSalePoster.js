import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';



const AddSalePoster = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    const onSubmit = data => {
        alert("SalePoster Added successfully!!!!");
        console.log(data)
        const salePosterData = {
            name: data.name,
            // location: data.location,
            image: imageUrl,
            description: data.description
        }
        const url = `http://localhost:5000/addSalePoster`
        console.log(salePosterData);
        fetch(url, {
            method: 'POST',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(salePosterData)
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
                if (response) {
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <section style={{ backgroundColor: '#9CC3D5FF', height: '750px' }}>
            <h4 className="text-center">write a review</h4>
            <div class="jumbotron d-flex align-items-center">
                <div class="container mx-auto">
                    <div className="container mx-auto mt-5 form-group ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control w-50" defaultValue="name" {...register("name")} />
                            <input className="form-control mt-3 mb-3 w-50" onChange={handleImageUpload} type="file" />
                            {/* <input className="form-control mt-3 mb-3 w-50" defaultValue="location" {...register("location")} /> */}
                            <input className="form-control mt-3 mb-3 w-50" defaultValue="description" {...register("description")} />



                            <input className="mt-4" type="submit" />
                        </form>
                        <div className="container text-center">
                            <a href="/"> <button type="button" className="btn btn-outline-success">HOME</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AddSalePoster;