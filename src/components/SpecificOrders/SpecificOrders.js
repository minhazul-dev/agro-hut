import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import "./SpecificOrders.css"
import moment from 'moment'
import { ScaleLoader } from 'react-spinners';


const SpecificOrders = () => {
    const [loggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setOrders(data)
                setLoading(false)
            })
    }, [])
    return (
        <section className="table-section">
            <div className="jumbotron container mt-5">
                <h3 className="display-6">Welcome: <b>{loggedInUser.name} <span><img width="60px" height="60px" src={loggedInUser.image} className="rounded-circle" alt="Cinque Terre"></img></span></b></h3>
                <h5 className=""><b>Your ordered Products: {orders.length}</b> </h5>
                <hr className="my-4" />
                <p><b>Your Orders</b></p>
                <div>
                    <div className=" row">
                        {loading ? <div className="container text-center mt-5 mb-5"> <ScaleLoader /></div> :
                            orders.map((singleOrder) => <div className="col-xs-12 col-sm-4">
                                <div className="card">
                                    <a className="img-card" href="">
                                        <img src={singleOrder.image} />
                                    </a>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <div className="container table-responsive py-5 table-container">

                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            {/* <th scope="col">No</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Ordered Time</th>
                        </tr>
                    </thead>
                    {
                        orders.map((singleOrder) =>
                            <tbody>
                                <tr>
                                    {/* <th scope="row">{singleOrder.}</th> */}
                                    <td>{singleOrder.name}</td>
                                    <td>{singleOrder.price}</td>
                                    <td>{moment(singleOrder.lastModifiedDate).format('MMMM Do YYYY, h:mm:ss a')}</td>

                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
            <div className="text-center mb-5">
                <a href="/">
                    <button type="button" class="btn btn-outline-success">Back To Home</button>
                </a>
            </div>
        </section>
    )
};
;

export default SpecificOrders;