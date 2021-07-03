import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Checkout.css"
const Checkout = () => {

    const { _id } = useParams()
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products`
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setDetails(data)
                console.log(data)
            })
    }, [])
    const allDetails = details.find((detail) => _id == detail._id);
    console.log(allDetails);
    const handleOrders = (e) => {
        let date = new Date()
        const totalProduct = { name: e.name, price: e.price, lastModifiedDate: date, image: e.imageUrl }
        console.log(totalProduct);
        const newOrders = { ...totalProduct };
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrders)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('order placed successfully')
                }
                // console.log(data)
            })

    }
    return (

        <div className="container rounded bg-white">
            <div className="bg row d-flex justify-content-center pb-5">
                <div className="col-sm-4 col-md-4 ml-1">
                    <div className="py-4 pl-6 d-flex flex-row">
                        <h5><span className="fa fa-check-square-o" /><b>AGRO-HUT</b> | </h5><span className="pl-2">Pay</span>
                    </div>
                    <div className="bg-white p-2 d-flex flex-column" style={{ borderRadius: '14px' }}>
                        <div className="text-center mt-4"> <img className="img-fluid" src={allDetails?.image} width={200} /> </div>
                        <h5>{allDetails?.name}</h5>
                        <p>for description</p>
                        <h4 className="green">price ${allDetails?.price}</h4>
                        <div className="rating d-flex">
                            <div className="col-10"> <button type="button" className="btn btn-outline-info btn-sm ms-3 ">Check Availability</button>
                                <select className="btn btn-outline-info btn-sm ms-3  ">
                                    <option value="">Location</option>
                                    <option value="BG">Bagerhat</option>
                                    <option value="AL">Bandarban</option>
                                    <option value="AK">Barguna</option>
                                    <option value="AZ">Barisal</option>
                                    <option value="AR">Bhola</option>
                                    <option value="CA">Bogra</option>
                                    <option value="CO">Brahmanbaria</option>
                                    <option value="CT">Chandpur</option>
                                    <option value="DE">Chittagong</option>
                                    <option value="DC">Chuadanga</option>
                                    <option value="FL">Comilla</option>
                                    <option value="GA">Cox's Bazar</option>
                                    <option value="HI">Dhaka</option>
                                    <option value="ID">Dinajpur</option>
                                    <option value="IL">Faridpur</option>
                                    <option value="IN">Feni</option>
                                    <option value="IA">Gaibandha</option>
                                    <option value="KS">Gazipur</option>
                                    <option value="KY">Gopalganj</option>
                                    <option value="LA">Habiganj</option>
                                    <option value="ME">Jaipurhat</option>
                                    <option value="MD">Jamalpur</option>
                                    <option value="MA">Jessore</option>
                                    <option value="MI">Jhalakati</option>
                                    <option value="MN">Jhenaidah</option>
                                    <option value="MS">Khagrachari</option>
                                    <option value="MO">Khulna</option>
                                    <option value="MT">Kishoreganj</option>
                                    <option value="NE">Kurigram</option>
                                    <option value="NV">Kushtia</option>
                                    <option value="NH">Lakshmipur</option>
                                    <option value="NJ">Lalmonirhat</option>
                                    <option value="NM">Madaripur</option>
                                    <option value="NY">Magura</option>
                                    <option value="NC">Manikganj</option>
                                    <option value="ND">Meherpur</option>
                                    <option value="OH">Moulvibazar</option>
                                    <option value="OK">Munshiganj</option>
                                    <option value="OR">Mymensingh</option>
                                    <option value="PA">Naogaon</option>
                                    <option value="RI">Narail</option>
                                    <option value="SC">Narayanganj</option>
                                    <option value="SD">Narsingdi</option>
                                    <option value="TN">Natore</option>
                                    <option value="TX">Nawabganj</option>
                                    <option value="UT">Netrakona</option>
                                    <option value="VT">Nilphamari</option>
                                    <option value="VA">Noakhali</option>
                                    <option value="WA">Pabna</option>
                                    <option value="WV">Panchagarh</option>
                                    <option value="WI">Patuakhali</option>
                                    <option value="WY">Pirojpur</option>
                                </select>
                            </div>

                            <div className="col-2"><img src="https://buildwithangga.com/themes/front/images/ic_lv_hard.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 col-md-6 mobile">
                    <div className="py-4 d-flex justify-content-end">
                        <h6><a href="/">Cancel and return to website</a></h6>
                    </div>
                    <div className="bg-white p-3 d-flex flex-column" style={{ borderRadius: '14px' }}>
                        <div className="pt-2">
                            <h5>You are paying for: {allDetails?.name}</h5>
                        </div>
                        <div className="d-flex">
                            <div className="col-8">lorem</div>
                            <div className="ml-auto"><b>lorem</b></div>
                        </div>
                        <div className="d-flex">
                            <div className="col-8">Lorem, ipsum dolor.</div>
                            <div className="ml-auto"><b>Lorem, ipsum.</b></div>
                        </div>
                        <div className="d-flex">
                            <div className="col-8">Lorem, ipsum dolor.</div>
                            <div className="ml-auto"><b>Tersedia</b></div>
                        </div>
                        <div className="pt-2">
                            <h5>Payment details</h5>
                        </div>
                        <div className="d-flex">
                            <div className="col-8">Product Price</div>
                            <div className="ml-auto green">$ {allDetails?.price}</div>
                        </div>
                        <div className="d-flex">
                            <div className="col-8"> <span className="green">Discount</span></div>
                            <div className="ml-auto">Not Available</div>
                        </div>
                        <div className="d-flex">
                            <div className="col-8">Shipping Charge</div>
                            <div className="ml-auto green">comming soon</div>
                        </div>
                        <div className="d-flex">
                            <div className="col-8">Total Price</div>
                            <div className="ml-auto green"><b>${allDetails?.price}</b></div>
                        </div>
                        <div className="pt-2">
                            <div className="border-top px-4 mx-8 pt-2" />
                            <h5><a href="">terms and conditions</a></h5>
                        </div>
                        <div className="d-flex flex-row">
                            <h5 className="pl-2"><span className="fa fa-check-square-o" /><b>Agro-Hut</b> | </h5><span className="pl-2">Pay</span>
                        </div>
                        <div className="pl-2">
                            <div>Lorem ipsum dolor sit amet.</div>
                            <div className="pb-2 "><b>8556572356</b></div>
                        </div> <input onClick={() => handleOrders(allDetails)} type="button" defaultValue="Place Order" className=" btn mt-4 btn-primary btn-block" style={{ borderRadius: '100px', backgroundColor: '#2447f9' }} />
                        <div className="text-center p-3"> <a className="text-link " target="_blank" href="#">report a problem</a> </div>
                    </div>
                    <div className="bg-white mt-4 p-3 d-flex flex-column" style={{ borderRadius: '14px' }}>
                        <div className="pt-2">
                            <h5>Having problem?</h5>
                        </div>
                        <div className="pl-2">
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptate fugit dicta voluptates? Reiciendis, quae!</div>
                        </div>
                        <div className="pt-2">
                            <h5>Call Support Center Now</h5>
                        </div>
                        <div className="d-flex">
                            {/* <div className="col-8">Admin</div> */}
                            {/* <div className="ml-auto">Gus</div> */}
                        </div>
                        <div className="d-flex">
                            <div className="col-8">Hotline</div>
                            <div className="ml-auto"><b>+880 1815446747</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;