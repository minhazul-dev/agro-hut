import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import "./AdminDashboard.css"
import "./Admindashboard02.css"
// import { Bar } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
import axios from "axios";


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

        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <div className="app-header header-shadow">
                <div className="app-header__logo">
                    <div className="logo-src" />
                    <div className="header__pane ml-auto">
                        <div>
                            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner" />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6" />
                            </span>
                        </button>
                    </span>
                </div>    <div className="app-header__content">
                    <div className="app-header-left">
                        <div className="search-wrapper">
                            <div className="input-holder">
                                <input type="text" className="search-input" placeholder="Type to search" />
                                <button className="search-icon"><span /></button>
                            </div>
                            <button className="close" />
                        </div>
                        <ul className="header-menu nav">
                            <li className="nav-item">
                                <a href="javascript:void(0);" className="nav-link">
                                    <i className="nav-link-icon fa fa-database"> </i>
                                    Statistics
                                </a>
                            </li>
                            <li className="btn-group nav-item">
                                <a href="javascript:void(0);" className="nav-link">
                                    <i className="nav-link-icon fa fa-edit" />
                                    Projects
                                </a>
                            </li>
                            <li className="dropdown nav-item">
                                <a href="javascript:void(0);" className="nav-link">
                                    <i className="nav-link-icon fa fa-cog" />
                                    Settings
                                </a>
                            </li>
                        </ul>      </div>
                    <div className="app-header-right">
                        <div className="header-btn-lg pr-0">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="btn-group">
                                            {/* <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                <img width={42} className="rounded-circle" src="assets/images/avatars/1.jpg" alt="" />
                                                <i className="fa fa-angle-down ml-2 opacity-8" />
                                            </a>
                                            <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                                <button type="button" tabIndex={0} className="dropdown-item">User Account</button>
                                                <button type="button" tabIndex={0} className="dropdown-item">Settings</button>
                                                <h6 tabIndex={-1} className="dropdown-header">Header</h6>
                                                <button type="button" tabIndex={0} className="dropdown-item">Actions</button>
                                                <div tabIndex={-1} className="dropdown-divider" />
                                                <button type="button" tabIndex={0} className="dropdown-item">Dividers</button>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="widget-content-left  ml-3 header-user-info">
                                        <div className="widget-heading">
                                            {loggedInUser.image}
                                        </div>
                                        <div className="widget-subheading">
                                            Super Admin
                                        </div>
                                    </div>
                                    <div className="widget-content-right header-user-info ml-3">
                                        <button type="button" className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                            <i className="fa text-white fa-calendar pr-1 pl-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>      </div>
                </div>
            </div>        <div className="ui-theme-settings">

            </div>        <div className="app-main">
                <div className="app-sidebar sidebar-shadow">
                    <div className="app-header__logo">
                        <div className="logo-src" />
                        <div className="header__pane ml-auto">
                            <div>
                                <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="app-header__mobile-menu">
                        <div>
                            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="app-header__menu">
                        <span>
                            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span className="btn-icon-wrapper">
                                    <i className="fa fa-ellipsis-v fa-w-6" />
                                </span>
                            </button>
                        </span>
                    </div>    <div className="scrollbar-sidebar">
                        <div className="app-sidebar__inner">
                            <ul className="vertical-nav-menu">
                                <li className="app-sidebar__heading">Dashboards</li>

                                <li className="/addProducts">Options</li>
                                <li>
                                    <a href="/aLLorders">
                                        <i className="metismenu-icon pe-7s-eyedropper">
                                        </i>All Orders
                                    </a>
                                </li>
                                <li>
                                    <a href="/addProducts">
                                        <i className="metismenu-icon pe-7s-eyedropper">
                                        </i>Add Products
                                    </a>
                                </li>

                                <li>
                                    <a href="forms-layouts.html">
                                        <i className="metismenu-icon  pe-7s-mouse">
                                        </i>Add Sale Poster
                                    </a>
                                </li>
                                <li>
                                    <a href="/manageproducts">
                                        <i className="metismenu-icon pe-7s-pendrive">
                                        </i>Delete Products
                                    </a>
                                </li>
                                <li>
                                    <a href="/makeAdmin">
                                        <i className="metismenu-icon pe-7s-pendrive">
                                        </i>Make Admin
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="metismenu-icon pe-7s-pendrive">
                                        </i>Back To Home
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>    <div className="app-main__outer">
                    <div className="app-main__inner">
                        <div className="app-page-title">
                            <div className="page-title-wrapper">
                                <div className="page-title-heading">
                                    <div className="page-title-icon">
                                        <i className="pe-7s-car icon-gradient bg-mean-fruit">
                                        </i>
                                    </div>
                                    <div>Agro-Hut Admin Dashboard
                                        <div className="page-title-subheading">Welcome {loggedInUser.name}
                                        </div>
                                    </div>
                                </div>
                                <div className="page-title-actions">
                                    {/* <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" className="btn-shadow mr-3 btn btn-dark">
                                        <i className="fa fa-star" />
                                    </button> */}
                                    <div className="d-inline-block dropdown">
                                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn-shadow dropdown-toggle btn btn-info">
                                            <span className="btn-icon-wrapper pr-2 opacity-7">
                                                <i className="fa fa-business-time fa-w-20" />
                                            </span>
                                            Options
                                        </button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a href="javascript:void(0);" className="nav-link">
                                                        <i className="nav-link-icon lnr-inbox" />
                                                        <span>
                                                            Inbox
                                                        </span>
                                                        <div className="ml-auto badge badge-pill badge-secondary">86</div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="javascript:void(0);" className="nav-link">
                                                        <i className="nav-link-icon lnr-book" />
                                                        <span>
                                                            Book
                                                        </span>
                                                        <div className="ml-auto badge badge-pill badge-danger">5</div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="javascript:void(0);" className="nav-link">
                                                        <i className="nav-link-icon lnr-picture" />
                                                        <span>
                                                            Picture
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a disabled href="javascript:void(0);" className="nav-link disabled">
                                                        <i className="nav-link-icon lnr-file-empty" />
                                                        <span>
                                                            File Disabled
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>  </div>
                        </div>            <div className="row">
                            <div className="col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content bg-midnight-bloom">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Total Products</div>
                                            <div className="widget-subheading">Products available in store</div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-white"><span>{products.length}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content bg-arielle-smile">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Customers</div>
                                            <div className="widget-subheading">Total customers</div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-white"><span>{customers.length}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content bg-grow-early">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Reviews</div>
                                            <div className="widget-subheading">Total reviews Given</div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="widget-numbers text-white"><span>{reviews.length}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="mb-3 card">
                                    <div className="card-header-tab card-header-tab-animation card-header">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                            Orders Report
                                        </div>
                                        <ul className="nav">
                                            <li className="nav-item"><a href="javascript:void(0);" className="active nav-link">Last</a></li>
                                            <li className="nav-item"><a href="javascript:void(0);" className="nav-link second-tab-toggle">Current</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="tabs-eg-77">
                                                <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                                                    <div className="widget-chat-wrapper-outer">
                                                        <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                            <canvas id="canvas" />
                                                            {/* <Bar data={} options={options} /> */}

                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">Top Authors</h6>
                                                {/* <div className="scroll-area-sm"> */}
                                                {/* <div className="scrollbar-container"> */}
                                                {/* <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush"> */}
                                                {/* <li className="list-group-item">
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left mr-3">
                                                                            <img width={42} className="rounded-circle" src="assets/images/avatars/9.jpg" alt="" />
                                                                        </div>
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-heading">Ella-Rose Henry</div>
                                                                            <div className="widget-subheading">Web Developer</div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="font-size-xlg text-muted">
                                                                                <small className="opacity-5 pr-1">$</small>
                                                                                <span>129</span>
                                                                                <small className="text-danger pl-2">
                                                                                    <i className="fa fa-angle-down" />
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li> */}
                                                {/* <li className="list-group-item">
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left mr-3">
                                                                            <img width={42} className="rounded-circle" src="assets/images/avatars/5.jpg" alt="" />
                                                                        </div>
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-heading">Ruben Tillman</div>
                                                                            <div className="widget-subheading">UI Designer</div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="font-size-xlg text-muted">
                                                                                <small className="opacity-5 pr-1">$</small>
                                                                                <span>54</span>
                                                                                <small className="text-success pl-2">
                                                                                    <i className="fa fa-angle-up" />
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li> */}
                                                {/* <li className="list-group-item">
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left mr-3">
                                                                            <img width={42} className="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                                                                        </div>
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-heading">Vinnie Wagstaff</div>
                                                                            <div className="widget-subheading">Java Programmer</div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="font-size-xlg text-muted">
                                                                                <small className="opacity-5 pr-1">$</small>
                                                                                <span>429</span>
                                                                                <small className="text-warning pl-2">
                                                                                    <i className="fa fa-dot-circle" />
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li> */}
                                                {/* <li className="list-group-item">
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left mr-3">
                                                                            <img width={42} className="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                                                                        </div>
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-heading">Ella-Rose Henry</div>
                                                                            <div className="widget-subheading">Web Developer</div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="font-size-xlg text-muted">
                                                                                <small className="opacity-5 pr-1">$</small>
                                                                                <span>129</span>
                                                                                <small className="text-danger pl-2">
                                                                                    <i className="fa fa-angle-down" />
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li> */}
                                                {/* <li className="list-group-item">
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left mr-3">
                                                                            <img width={42} className="rounded-circle" src="assets/images/avatars/2.jpg" alt="" />
                                                                        </div>
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-heading">Ruben Tillman</div>
                                                                            <div className="widget-subheading">UI Designer</div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="font-size-xlg text-muted">
                                                                                <small className="opacity-5 pr-1">$</small>
                                                                                <span>54</span>
                                                                                <small className="text-success pl-2">
                                                                                    <i className="fa fa-angle-up" />
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li> */}
                                                {/* </ul> */}
                                                {/* </div> */}
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="mb-3 card">
                                    <div className="card-header-tab card-header">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                            Bandwidth Reports
                                        </div>
                                        <div className="btn-actions-pane-right">
                                            <div className="nav">
                                                <a href="javascript:void(0);" className="border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate">Tab 1</a>
                                                <a href="javascript:void(0);" className="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt">Tab 2</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" id="tab-eg-55">
                                            <div className="widget-chart p-3">
                                                <div style={{ height: '350px' }}>
                                                    <canvas id="line-chart" />
                                                </div>
                                                <div className="widget-chart-content text-center mt-5">
                                                    <div className="widget-description mt-0 text-warning">
                                                        <i className="fa fa-arrow-left" />
                                                        <span className="pl-1">175.5%</span>
                                                        <span className="text-muted opacity-8 pl-1">increased server resources</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2 card-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left">
                                                                        <div className="widget-numbers fsize-3 text-muted">63%</div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">Generated Leads</div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={63} aria-valuemin={0} aria-valuemax={100} style={{ width: '63%' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left">
                                                                        <div className="widget-numbers fsize-3 text-muted">32%</div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">Submitted Tickers</div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={32} aria-valuemin={0} aria-valuemax={100} style={{ width: '32%' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left">
                                                                        <div className="widget-numbers fsize-3 text-muted">71%</div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">Server Allocation</div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{ width: '71%' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left">
                                                                        <div className="widget-numbers fsize-3 text-muted">41%</div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">Generated Leads</div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={41} aria-valuemin={0} aria-valuemax={100} style={{ width: '41%' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content">
                                    <div className="widget-content-outer">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Total Orders</div>
                                                <div className="widget-subheading">Last year expenses</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-success">1896</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content">
                                    <div className="widget-content-outer">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Products Sold</div>
                                                <div className="widget-subheading">Revenue streams</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-warning">$3M</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content">
                                    <div className="widget-content-outer">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Followers</div>
                                                <div className="widget-subheading">People Interested</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-danger">45,9%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content">
                                    <div className="widget-content-outer">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Income</div>
                                                <div className="widget-subheading">Expected totals</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-focus">$147</div>
                                            </div>
                                        </div>
                                        <div className="widget-progress-wrapper">
                                            <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                <div className="progress-bar bg-info" role="progressbar" aria-valuenow={54} aria-valuemin={0} aria-valuemax={100} style={{ width: '54%' }} />
                                            </div>
                                            <div className="progress-sub-label">
                                                <div className="sub-label-left">Expenses</div>
                                                <div className="sub-label-right">100%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-card mb-3 card">
                                    <div className="card-header">Recent orders
                                        <div className="btn-actions-pane-right">
                                            <div role="group" className="btn-group-sm btn-group">
                                                <button className="active btn btn-focus">Last Week</button>
                                                <button className="btn btn-focus">All Month</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">Order ID</th>
                                                    <th className="text-center">Ordered By</th>
                                                    <th className="ms-5">Product Name</th>
                                                    <th className="text-center">Price</th>
                                                    <th className="text-center">Ordered on</th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    customers.map((customer) => <tr>
                                                        <td className="text-center text-muted">{customer._id}</td>
                                                        <td className="text-center text-muted">{customer.email}</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    {/* <div className="widget-content-left mr-3">
                                                                        <div className="widget-content-left">
                                                                            <img width={40} className="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                                                                        </div>
                                                                    </div> */}
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">{customer.name}</div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">$ {customer.price}</td>
                                                        <td className="text-center">
                                                            <div className="badge badge-info">{moment(customer.lastModifiedDate).format('MMMM Do YYYY, h:mm:ss a')}</div>
                                                        </td>
                                                        <td className="text-center">
                                                            <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm">Details</button>
                                                        </td>
                                                    </tr>)
                                                }



                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-block text-center card-footer">
                                        <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i className="pe-7s-trash btn-icon-wrapper"> </i></button>
                                        <button className="btn-wide btn btn-success">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{ width: '71%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6">Income Target</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3 text-success">54%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={54} aria-valuemin={0} aria-valuemax={100} style={{ width: '54%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6">Expenses Target</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={32} aria-valuemin={0} aria-valuemax={100} style={{ width: '32%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6">Spendings Target</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{ width: '89%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6">Totals Target</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;






