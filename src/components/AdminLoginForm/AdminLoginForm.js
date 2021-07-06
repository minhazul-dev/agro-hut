import React from 'react';
import "./AdminLoginForm.css"

import agrohutlofo from '../../components/assets/images/Agro_Hut Logos/AgroHutLoged.png'
const AdminLoginForm = () => {
    return (
        <div className="mt-5">
            {/* <h1 className="text-center">Vertical layout</h1> */}
            <div className="container pt-3">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-6 col-md-4">
                        <div className="card border-info text-center">
                            <div className="card-header">
                                {/* Sign in to continue */}
                            </div>
                            <div className="card-body">
                                {/* <img src={agrohutlofo} /> */}
                                <h4 className="text-center">Agro-Hut &amp; Admin</h4>
                                <form className="form-signin">
                                    <input type="text" className="form-control mb-2" placeholder="Email" required autofocus />
                                    <input type="password" className="form-control mb-2" placeholder="Password" required />
                                    <a href="/admin">admin</a>                                  <label className="checkbox float-left">
                                        {/* <input type="checkbox" defaultValue="remember-me" /> */}
                                        {/* Remember me */}
                                    </label>
                                    {/* <a href="#" className="float-right">Need help?</a> */}
                                </form>
                            </div>
                        </div>
                        {/* <a href="#" className="float-right">Create an account </a> */}
                    </div>
                </div>
            </div>
            <hr />

        </div>
    );
};

export default AdminLoginForm;