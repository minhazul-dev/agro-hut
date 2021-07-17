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

    const fbprovider = new firebase.auth.FacebookAuthProvider();
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


    // const handleFbSignIn = () => {
    //     firebase
    //         .auth()
    //         .signInWithPopup(fbProvider)
    //         .then(res => {
    //             const { displayName, photoURL } = res.user;
    //             const fbSignedInUser = { name: displayName, image: photoURL }
    //             setLoggedInUser(fbSignedInUser)
    //             var credential = res.credential;
    //             var user = res.user;
    //             // var accessToken = credential.accessToken;
    //             // history.replace(from)
    //             console.log('fb user', user);


    //         })
    //         .catch((error) => {

    //             var errorCode = error.code;
    //             var errorMessage = error.message;

    //             // var email = error.email;

    //             var credential = error.credential;

    //             console.log(errorCode, errorMessage, credential);
    //         });
    // }

    return (

        <section className="container-fluid container-fluidofLoginpage">
            <main className="row mainofadminloginpage">
                <section className="col-md-6" id="panel-left">
                    <div className="container align-self-center marginofcont">
                        <div className="row">
                            <h1 className="col-12 text-center h1oflogin">We Use <b style={{ color: '#DB4437' }}>GOOGLE</b> Authentication</h1>
                        </div>
                        <div className="row">
                            <p className="col-12 text-center description">
                                Continue For further process
                            </p>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 logo-container d-flex justify-content-center">
                                {/* logo img in svg */}
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                    <path style={{ fill: '#F8B64C' }} d="M256,86.4c51.2,0,98.133,21.333,132.267,54.4l49.067-49.067
                            C391.467,45.867,327.467,17.067,256,17.067c-70.4,0-134.4,28.8-181.333,74.667l49.067,49.067C157.867,106.667,204.8,86.4,256,86.4z" />
                                    <path style={{ fill: '#54C0EB' }} d="M123.733,140.8L74.667,91.733C28.8,138.667,0,202.667,0,273.067s28.8,134.4,74.667,181.333
                            l49.067-49.067c-34.133-34.133-54.4-81.067-54.4-132.267C69.333,221.867,89.6,174.933,123.733,140.8z" />
                                    <path style={{ fill: '#F1543F' }} d="M437.333,91.733L388.267,140.8c34.133,34.133,54.4,81.067,54.4,132.267s-21.333,98.133-54.4,132.267
                            l49.067,49.067C483.2,408.533,512,344.533,512,273.067C512,202.667,483.2,138.667,437.333,91.733z" />
                                    <path style={{ fill: '#FFD15C' }} d="M388.267,140.8l-46.933,46.933c-22.4-21.333-52.267-35.2-85.333-35.2s-64,13.867-85.333,35.2l0,0
                            L123.733,140.8C157.867,106.667,204.8,86.4,256,86.4S354.133,106.667,388.267,140.8z" />
                                    <path style={{ fill: '#84DBFF' }} d="M170.667,358.4l-46.933,46.933c-34.133-34.133-54.4-81.067-54.4-132.267s21.333-98.133,54.4-132.267
                            l46.933,46.933c-21.333,21.333-35.2,52.267-35.2,85.333C134.4,306.133,148.267,337.067,170.667,358.4z" />
                                    <path style={{ fill: '#FF7058' }} d="M442.667,273.067c0,51.2-21.333,98.133-54.4,132.267L341.333,358.4
                            c21.333-22.4,35.2-52.267,35.2-85.333s-13.867-64-35.2-85.333l46.933-46.933C422.4,174.933,442.667,221.867,442.667,273.067z" />
                                    <path style={{ fill: '#40596B' }} d="M420.267,171.733L281.6,277.333c-2.133,12.8-12.8,21.333-25.6,21.333
                            c-14.933,0-26.667-11.733-26.667-26.667s11.733-26.667,26.667-26.667c3.2,0,5.333,0,8.533,1.067L420.267,171.733z" />
                                    <path style={{ fill: '#CDD6E0' }} d="M347.733,494.933H164.267c-22.4,0-40.533-18.133-40.533-40.533l0,0
                            c0-22.4,18.133-40.533,40.533-40.533h182.4c22.4,0,40.533,18.133,40.533,40.533l0,0C388.267,476.8,370.133,494.933,347.733,494.933z
                            " />
                                    <circle style={{ fill: '#FFFFFF' }} cx={256} cy="273.07" r="10.667" />


                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="col-md-6" id="panel-right">
                    <div className="container">
                        <div className="row mb-5">
                            <h2 className="col-12 text-center i h2oflogin">Continue with google</h2>
                        </div>
                        <div className="row">
                            <form action="#" className="col-12 col-md-8 offset-md-2">
                                <div className="form-group">
                                    <input type="name" className="form-control" name="email" id="email" placeholder="First Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="password" id="password" placeholder="Email Address" required />
                                </div>
                                <div className="form-group text-center pt-4">
                                    <input onClick={handleSignIn} type="submit" className="btn btn-primary buttonoflogin" defaultValue="Ingresar" />
                                    {/* <button onClick={handleSignIn} class="common-btn orange">Continue with Google</button> */}
                                </div>
                            </form>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 links text-center">
                                <div className="linksofloginlasta">
                                    <a href="#">Report a Problem</a>
                                </div>
                                <div className="linksofloginlasta">
                                    <a href="/">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </section>


        // <section className="loginButtonsectionmain">
        //     <div className="container">
        //         <h3 className="text-info mb-5">Please Continue With <b style={{ color: ' #DB4437' }}>GOOGLE</b> or <b style={{ color: 'blue' }}>FACEBOOK</b> for Further Process.</h3>
        //     </div>
        //     <button onClick={handleSignIn} class="common-btn orange">Continue with Google</button>
        //     <br />
        //     <br />
        //     <br />

        //     <button onClick={handleFbSignIn} class="common-btn blue">Continue with Facebook</button>













        //     <div class="container " >
        //         <div className="container marginogtextlogin text-center">
        //             <h3>Please Continue Wirh GOOGLE or FACEBOOK for Further Process</h3>
        //         </div>
        //         <div class=" d-flex align-items-center justify-content-center " style={{ height: "20vh" }}  >
        //             <div class="row">
        //                 <div class="col-lg-6 col-sm-12 text-center">
        //                     <a class="btn btn-border-4" href="">I'm a button</a>
        //                 </div>
        //                 <div class="col-lg-6 col-sm-12 text-center facebookButton">
        //                     <a class="btn btn-border-4" href="">I'm a button</a>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </section>



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


