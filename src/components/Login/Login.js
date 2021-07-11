import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = { name: displayName, email: email, image: photoURL }
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from)
            })


    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken)
            }).catch(function (error) {
                // Handle error
            });
    }


    const handleFbSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
                console.log('fb user', user);
                // setLoggedInUser

            })
            .catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;

                var credential = error.credential;

                console.log(errorCode, errorMessage, email, credential);
            });
    }

    return (

        <section>

            <div className="flx">
                <div className="demo-content">
                    <h3 className="mb-4">Please Continue with <b>GOOGLE</b> or <b>FACEBOOK</b> For further Process</h3>
                    <div className="nshare">
                        <a onClick={handleFbSignIn} className="nshare-item nshare-fb" href="#">

                            <FontAwesomeIcon className="icons" icon={faFacebook} size='2x' />
                        </a>
                        <a onClick={handleSignIn} className="nshare-item nshare-tt" href="">
                            <FontAwesomeIcon className="icons" icon={faGoogle} size='2x' />
                        </a>
                        {/* <a className="nshare-item nshare-pt" href="#">
                            <button class='four'>Change some <b>settings</b></button>
                        </a>
                        <a className="nshare-item nshare-tb" href="#">
                            <i className="fab fa-tumblr" />
                        </a>
                        <a className="nshare-item nshare-rd" href="#">
                            <i className="fab fa-reddit-alien" />
                        </a>
                        <a className="nshare-item nshare-vk" href="#">
                            <i className="fab fa-vk" />
                        </a>
                        <a className="nshare-item nshare-ws" href="#">
                            <i className="fab fa-whatsapp" />
                        </a>
                        <a className="nshare-item nshare-tlg" href="#">
                            <i className="fab fa-telegram-plane" />
                        </a>
                        <a className="nshare-item nshare-msj" href="#">
                            <i className="fas fa-envelope" />
                        </a> */}
                    </div>
                </div>
            </div>
        </section>


        // <section className="login-block">
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="col-sm-12">
        //                 <form className="md-float-material form-material" action="#" method="POST">
        //                     <div className="auth-box card">
        //                         <div className="card-block">
        //                             <div className="row">
        //                                 <div className="col-md-12">
        //                                     <h3 className="text-center heading"><b>Only Google Authentication is Available. Please Continue With GOOGLE</b></h3>

        //                                 </div>
        //                             </div>
        //                             <div className="form-group form-primary"> <input type="text" className="form-control" name="first_name" defaultValue placeholder="Display name" id="first_name" /> </div>
        //                             <div className="form-group form-primary"> <input type="text" className="form-control" name="email" defaultValue placeholder="Email" id="email" /> </div>
        //                             <div className="form-group form-primary"> <input type="password" className="form-control" name="password" placeholder="Password" defaultValue id="password" /> </div>
        //                             <div className="form-group form-primary"> <input type="password" className="form-control" name="password_confirm" placeholder="Repeat password" defaultValue id="password_confirm" /> </div>
        //                             <div className="row">
        //                                 <div className="col-md-12 d-flex"> <input type="submit" className="border border-info btn btn-primary btn-md btn-block waves-effect text-center m-b-20" disabled name="submit" defaultValue="Signup Now" />
        //                                     <h3 className="ms-5"><a href="/">Cancel </a>
        //                                     </h3>
        //                                 </div>
        //                             </div>
        //                             <div className="or-container">
        //                                 <div className="line-separator" />
        //                                 <div className="or-label">or</div>
        //                                 <div className="line-separator" />
        //                             </div>
        //                             <div className="row">
        //                                 <div className="col-md-12"> <a onClick={handleSignIn} className="btn btn-lg btn-google btn-block text-uppercase btn-outline border border-info" href="#"> <FontAwesomeIcon className="iconss" icon={faGoogle} size='1x' /> <b>Signup Using Google</b></a> </div>
        //                             </div> <br />
        //                             <p className="text-inverse text-center">Already have an account? <a href="<?= base_url() ?>auth/login" data-abc="true">Login</a></p>
        //                         </div>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Login;


