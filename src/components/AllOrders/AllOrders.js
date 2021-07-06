import React, { useEffect, useState } from 'react';
import "./AllOrders.css"
import moment from 'moment'



const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))

    }, [])


    return (
        <section>
            <div className="jumbotron jumbotron-fluid mt-5">
                <div className="container">
                    <h1 className="display-4">All Orders</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nihil. Distinctio, consequuntur!</p>
                </div>
            </div>

            <div className="container table-responsive py-5">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Email</th>
                            <th scope="col">Order Time</th>
                        </tr>
                    </thead>
                    {allOrders.map(allOrder => <tbody>
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td>{allOrder.name}</td>
                            <td>{allOrder.price}</td>
                            <td>{allOrder.email}</td>
                            <td>{moment(allOrder.lastModifiedDate).format('MMMM Do YYYY, h:mm:ss a')}</td>
                        </tr>
                    </tbody>)
                    }
                </table>
            </div>
        </section>
    );
};

export default AllOrders;