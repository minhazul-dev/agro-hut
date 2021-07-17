import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
// import "./AdminDashboard.css"
import "./Admindashboard02.css"


////chartjs







const AdminDashboard = () => {

    const [reviews, setReviews] = useState([])
    const [products, setProducts] = useState([])
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch('https://thawing-fjord-24286.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    //fetching all orders
    useEffect(() => {
        fetch('https://thawing-fjord-24286.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setCustomers(data))

    }, [])
    //fetching all products
    useEffect(() => {
        fetch('https://thawing-fjord-24286.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    //deleting reviews
    const deleteReview = id => {
        const url = `https://thawing-fjord-24286.herokuapp.com/deletereviews/${id}`;
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

    //////admin procedure
    const [isAdmin, setIsAdmin] = useState(false)
    const [loggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch(`https://thawing-fjord-24286.herokuapp.com/isAdmin?email=${loggedInUser.email}`)
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    console.log(isAdmin);
    console.log(isAdmin);

    //charts


    return (

        <section className="admindboardsection">
            <div className="grid">
                <header className="header">
                    <i className="fas fa-bars header__menu" />
                    <div className="header__search">
                        <input className="header__input" placeholder="Search..." />
                    </div>
                    <div className="header__avatar">
                        <img style={{ height: '30px', width: '30px', borderRadius: '50%' }} src={loggedInUser.image} alt="" />
                        <div className="dropdown">

                        </div>
                    </div>
                </header>
                <aside className="sidenav">
                    <div className="sidenav__brand">
                        <i className="fas fa-feather-alt sidenav__brand-icon" />
                        <a className="sidenav__brand-link" href="#">Agro<span className="text-light">Hut</span></a>
                        <i className="fas fa-times sidenav__brand-close" />
                    </div>
                    <div className="sidenav__profile">
                        {/* <div className="sidenav__profile-avatar" /> */}
                        <div className="sidenav__profile-avatar">
                            <img style={{ height: '62px', width: '62px', borderRadius: '50%' }} src={loggedInUser.image} alt="" />
                        </div>
                        <div className="sidenav__profile-title text-light">{loggedInUser.name}</div>
                    </div>
                    <div className="row row--align-v-center row--align-h-center">
                        <ul className="navList">

                            <li>
                                <div className="navList__subheading row row--align-v-center ">
                                    <a className="text-white" href="/addProducts">
                                        <span className="navList__subheading-title">Add Products</span>
                                    </a>
                                </div>

                            </li>
                            <li>
                                <div className="navList__subheading row row--align-v-center ">
                                    <a className="text-white" href="/addSalePoster">
                                        <span className="navList__subheading-title">Add SalePoster</span>
                                    </a>
                                </div>

                            </li>
                            <li>
                                <div className="navList__subheading row row--align-v-center ">
                                    <a className="text-white" href="/AllOrders">
                                        <span className="navList__subheading-title">All Orders</span>
                                    </a>
                                </div>

                            </li>
                            <li>
                                <div className="navList__subheading row row--align-v-center ">
                                    <a className="text-white" href="/manageproducts">
                                        <span className="navList__subheading-title">Delete Products</span>
                                    </a>
                                </div>

                            </li>
                            <li>
                                <div className="navList__subheading row row--align-v-center ">
                                    <a className="text-white" href="/makeAdmin">
                                        <span className="navList__subheading-title">Make Admin</span>
                                    </a>
                                </div>

                            </li>
                            <li>
                                <div className="navList__subheading row row--align-v-center ">
                                    <a className="text-white" href="/">
                                        <span className="navList__subheading-title">Back to home</span>
                                    </a>
                                </div>

                            </li>


                        </ul>
                    </div>
                </aside>
                <main className="main">
                    <div className="main-header">
                        <div className="main-header__intro-wrapper">
                            <div className="main-header__welcome">
                                <div className="main-header__welcome-title text-light">Welcome, <strong>{loggedInUser.name}</strong></div>
                                <div className="main-header__welcome-subtitle text-light">Super Admin, <h>{loggedInUser.email}</h></div>
                            </div>
                            <div className="quickview">
                                <div className="quickview__item">
                                    <div className="quickview__item-total">{products.length}</div>
                                    <div className="quickview__item-description">
                                        <i className="far fa-calendar-alt" />
                                        <span className="text-light">Products Available</span>
                                    </div>
                                </div>
                                <div className="quickview__item">
                                    <div className="quickview__item-total">{reviews.length}</div>
                                    <div className="quickview__item-description">
                                        <i className="far fa-comment" />
                                        <span className="text-light">Reviews</span>
                                    </div>
                                </div>
                                <div className="quickview__item">
                                    <div className="quickview__item-total">{customers.length}</div>
                                    <div className="quickview__item-description">
                                        <i className="fas fa-map-marker-alt" />
                                        <span className="text-light">Customers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-overview">
                        <div className="overviewCard">
                            <div className="overviewCard-icon overviewCard-icon--document">
                                <i className="far fa-file-alt" />
                            </div>
                            <div className="overviewCard-description">
                                <h3 className="overviewCard-title text-light">New <strong>Document</strong></h3>
                                <p className="overviewCard-subtitle">Europe Trip</p>
                            </div>
                        </div>
                        <div className="overviewCard">
                            <div className="overviewCard-icon overviewCard-icon--calendar">
                                <i className="far fa-calendar-check" />
                            </div>
                            <div className="overviewCard-description">
                                <h3 className="overviewCard-title text-light">Upcoming <strong>Event</strong></h3>
                                <p className="overviewCard-subtitle">Chili Cookoff</p>
                            </div>
                        </div>
                        <div className="overviewCard">
                            <div className="overviewCard-icon overviewCard-icon--mail">
                                <i className="far fa-envelope" />
                            </div>
                            <div className="overviewCard-description">
                                <h3 className="overviewCard-title text-light">Recent <strong>Emails</strong></h3>
                                <p className="overviewCard-subtitle">{reviews.length}</p>
                            </div>
                        </div>
                        <div className="overviewCard">
                            <div className="overviewCard-icon overviewCard-icon--photo">
                                <i className="far fa-file-image" />
                            </div>
                            <div className="overviewCard-description">
                                <h3 className="overviewCard-title text-light">New <strong>Album</strong></h3>
                                <p className="overviewCard-subtitle">House Concert</p>
                            </div>
                        </div>
                    </div> {/* /.main__overview */}
                    <div className="main__cards">
                        <div className="card">
                            <div className="card__header">
                                <div className="card__header-title text-light">Recent <strong>Reviews</strong>
                                    {/* <a href="#" className="card__header-link text-bold">View All</a> */}
                                </div>
                                <div className="settings">
                                    <div className="settings__block"><i className="fas fa-edit" /></div>
                                    <div className="settings__block"><i className="fas fa-cog" /></div>
                                </div>
                            </div>
                            <div className="card__main">


                                {
                                    reviews.map((review) => <div className="card__row">
                                        <div className="card__icon"><i className="fas fa-book" /></div>
                                        <div className="card__time">
                                            <div>{review.date}</div>
                                        </div>
                                        <div className="card__detail">
                                            <div className="card__source text-bold">{review.name}</div>
                                            <div className="card__description">{review.description}</div>
                                            <div className="card__note">{review.location}</div>
                                        </div>
                                    </div>)
                                }


                            </div>
                        </div>
                        <div className="card">
                            <div className="card__header">
                                <div className="card__header-title text-light">Recent <strong>Documents</strong>
                                    <a href="#" className="card__header-link text-bold">View All</a>
                                </div>
                                <div className="settings">
                                    <div className="settings__block"><i className="fas fa-edit" /></div>
                                    <div className="settings__block"><i className="fas fa-cog" /></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="documents">
                                    <div className="document">
                                        <div className="document__img" />
                                        <div className="document__title">tesla-patents</div>
                                        <div className="document__date">07/16/2018</div>
                                    </div>
                                    <div className="document">
                                        <div className="document__img" />
                                        <div className="document__title">yearly-budget</div>
                                        <div className="document__date">09/04/2018</div>
                                    </div>
                                    <div className="document">
                                        <div className="document__img" />
                                        <div className="document__title">top-sales</div>
                                        <div className="document__date">10/10/2018</div>
                                    </div>
                                    <div className="document">
                                        <div className="document__img" />
                                        <div className="document__title">trip-itinerary</div>
                                        <div className="document__date">11/01/2018</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
                <div className="container mb-4 ">
                    <h3 className="text-center mt-3 mb-3">Recent Orders</h3>
                    <table className="responsive-table ">
                        {/* <caption>Top 10 Grossing Animated Films of All Time</caption> */}
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Invoice</th>
                                <th scope="col">Ordered By</th>
                                <th scope="col">Order Date </th>
                            </tr>
                        </thead>

                        <tbody>


                            {
                                customers.map((orders) => <tr>
                                    <th scope="row">{orders.name}</th>
                                    <td data-title="Price">$ {orders.price}</td>
                                    <td data-title="Invoice">{orders._id}</td>
                                    <td data-title="Email" data-type="currency">{orders.email}</td>
                                    <td data-title="Order Date" data-type="currency">{moment(orders.lastModifiedDate).format('MMMM Do YYYY, h:mm:ss a')}</td>


                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default AdminDashboard;






