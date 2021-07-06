import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = { name: displayName, email: email, image: photoURL }
                setLoggedInUser(signedInUser);
                history.replace(from)
            })


    }

    return (
        <section className="login-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <form className="md-float-material form-material" action="#" method="POST">
                            <div className="auth-box card">
                                <div className="card-block">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3 className="text-center heading"><b>Only Google Authentication is Available. Please Continue With GOOGLE</b></h3>

                                        </div>
                                    </div>
                                    <div className="form-group form-primary"> <input type="text" className="form-control" name="first_name" defaultValue placeholder="Display name" id="first_name" /> </div>
                                    <div className="form-group form-primary"> <input type="text" className="form-control" name="email" defaultValue placeholder="Email" id="email" /> </div>
                                    <div className="form-group form-primary"> <input type="password" className="form-control" name="password" placeholder="Password" defaultValue id="password" /> </div>
                                    <div className="form-group form-primary"> <input type="password" className="form-control" name="password_confirm" placeholder="Repeat password" defaultValue id="password_confirm" /> </div>
                                    <div className="row">
                                        <div className="col-md-12 d-flex"> <input type="submit" className="border border-info btn btn-primary btn-md btn-block waves-effect text-center m-b-20" disabled name="submit" defaultValue="Signup Now" />
                                            <h3 className="ms-5"><a href="/">Cancel </a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="or-container">
                                        <div className="line-separator" />
                                        <div className="or-label">or</div>
                                        <div className="line-separator" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12"> <a onClick={handleSignIn} className="btn btn-lg btn-google btn-block text-uppercase btn-outline border border-info" href="#"> <FontAwesomeIcon className="iconss" icon={faGoogle} size='1x' /> <b>Signup Using Google</b></a> </div>
                                    </div> <br />
                                    <p className="text-inverse text-center">Already have an account? <a href="<?= base_url() ?>auth/login" data-abc="true">Login</a></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;


