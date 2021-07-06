import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        alert("Admin Added successfully!!!!");
        console.log(data)
        const adminData = {
            name: data.name,
            email: data.email,
            description: data.description,

        }
        const url = `http://localhost:5000/adminEmail`
        console.log(adminData);
        fetch(url, {
            method: 'POST',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(adminData)
        })
            .then(response => console.log('server side response', response))
    }
    return (
        <section style={{ backgroundColor: '#9CC3D5FF', height: '700px' }}>
            <h3 className="text-center">Here Add Products</h3>
            <div className="container mx-auto mt-5 form-group">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" defaultValue="name" {...register("name")} />
                    <input className="form-control mt-3 mb-3" defaultValue="email" {...register("email")} />
                    <input className="form-control mt-3 mb-3" defaultValue="description" {...register("description")} />

                    <input className="mt-4" type="submit" />
                </form>
            </div>
            <div className="container text-center">
                <a href="/"> <button type="button" className="btn btn-outline-success">HOME</button></a>
            </div>
        </section>
    );
};

export default MakeAdmin;