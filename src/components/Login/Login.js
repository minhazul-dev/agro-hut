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

    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = { name: displayName, email: email, image: photoURL }
                setLoggedInUser(signedInUser);
                // storeAuthToken();
                history.replace(from)
            })


    }
    // const storeAuthToken = () => {
    //     firebase.auth().currentUser.getIdToken(true)
    //         .then(function (idToken) {
    //             sessionStorage.setItem('token', idToken)
    //         }).catch(function (error) {
    //             // Handle error
    //         });
    // }


    const handleFbSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((res) => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = { name: displayName, email: email, image: photoURL }
                setLoggedInUser(signedInUser);
                var credential = res.credential;
                var user = res.user;
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


        <section className="loginButtonsectionmain">
            <div className="container">
                <h3 className="text-info mb-5">Please Continue With <b style={{ color: ' #DB4437' }}>GOOGLE</b> or <b style={{ color: 'blue' }}>FACEBOOK</b> for Further Process.</h3>
            </div>
            <button onClick={handleSignIn} class="common-btn orange">Continue with Google</button>
            <br />
            <br />
            <br />

            <button onClick={handleFbSignIn} class="common-btn blue">Continue with Facebook</button>













            {/* <div class="container " >
                <div className="container marginogtextlogin text-center">
                    <h3>Please Continue Wirh GOOGLE or FACEBOOK for Further Process</h3>
                </div>
                <div class=" d-flex align-items-center justify-content-center " style={{ height: "20vh" }}  >
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 text-center">
                            <a class="btn btn-border-4" href="">I'm a button</a>
                        </div>
                        <div class="col-lg-6 col-sm-12 text-center facebookButton">
                            <a class="btn btn-border-4" href="">I'm a button</a>
                        </div>

                    </div>
                </div>
            </div> */}
        </section>



        // <section className="login-block">
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="col-sm-12">
        //                 <form className="md-float-material form-material" action="#" method="POST">
        //                     <div className="auth-box card mt-5">
        //                         <div className="card-block mt-5">
        //                             <div className="row">
        //                                 <div className="col-md-12">
        //                                     <h3 className="text-center heading"><b>Please Continue With GOOGLE or FACEBOOK For Further Process</b></h3>

        //                                 </div>
        //                             </div>

        //                             <div className="or-container">
        //                                 <div className="line-separator" />
        //                                 <div className="or-label">or</div>
        //                                 <div className="line-separator" />
        //                             </div>
        //                             <div className="row">
        //                                 <div className="col-md-12 "> <a onClick={handleSignIn} className="btn btn-lg btn-google btn-block text-uppercase btn-outline border border-info" href="#"> <FontAwesomeIcon className="iconss" icon={faGoogle} size='1x' /> <b className="loginText">Continue Using Google</b></a> </div>
        //                                 <div className="col-md-12 mt-3 t"> <a onClick={handleFbSignIn} className="btn btn-lg btn-google btn-block text-uppercase btn-outline border border-info" href="#"> <FontAwesomeIcon className="iconss" icon={faFacebook} size='1x' /> <b className="loginText">Continue Using Facebook</b></a> </div>
        //                             </div> <br />
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


