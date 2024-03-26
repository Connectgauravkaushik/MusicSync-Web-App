import { MUSIC_APP_LOGO } from "../../utils/constant";
import image1 from "../../images/image1.png";
import image2 from "../../images/image3.png";
import { Link } from "react-router-dom";
import {useRef, useState } from "react";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../../utils/firebase";
import { addUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const CLIENT_ID = REACT_APP_CLIENT_ID;
  const REDIRECT_URL = "http://localhost:3000/home";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";


  const [errorMessage, setErrorMessage] = useState(null);
  const [token, setToken] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleButtonClick = () => {

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        email.current.value = null;
        password.current.value = null;

      })
      .then(() => {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName
          }));
        !token && window.localStorage.getItem('token') === null ?
          window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`
          : navigate('/home');

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage)
      });

  }


  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .then(() => {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName
          }));
        !token ?
          window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`
          : navigate('/login');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });


  }


  return (
    <>
      <div className="h-[100vh] bg-black " id="linear">
        <div className="ml-[20px] flex ">
          <img
            className="w-28 h-16 mt-7"
            src={MUSIC_APP_LOGO}
            alt="Logo" />
          <h1 className="text-2xl text-white font-bold mt-[45px]">MusicSync</h1>
        </div>
        <div className="w-1/4 text-white float-left mt-[418px]">
          <img src={image1} alt=""></img>
        </div>
        <div className="  ml-[600px] mr-[600px] h-[86vh]  shadow-2xl rounded-lg bg-gradient from-red-500 to-black ">
          <div className="text-white font-bold text-3xl w-10/12 leading-[50px] ml-10">Login in to MusicSync.........</div>
          <button className="border border-slate-500 bg-black font-bold text-white p-1 w-96 ml-10 mr-10 rounded-3xl mt-6 hover:scale-125 transition-all ease-in-out" onClick={loginWithGoogle}>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="mt-3 ml-[24px]"
              x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <p className="-mt-[34px] p-2">Continue With Google</p></button>
          <form className="text-white mt-10" onSubmit={(e) => { e.preventDefault() }}>
            <label className="ml-12 text-sm font-bold">Email or username</label>
            <br />
            <input type="email" className="bg-black text-white border border-slate-400 rounded-lg p-2 ml-12 w-96" placeholder="Enter Email address" ref={email} />
            <br />
            <br />
            <label className="ml-12 text-sm font-bold">Enter password</label>
            <br />
            <input type="password" className="bg-black text-white border border-slate-400 rounded-lg p-2 ml-12 w-96" placeholder="Enter Password" ref={password} />
            <br />
            <br />
            <br />
            <button className="border border-slate-500 bg-black font-bold w-96 p-2 ml-12 mr-10 rounded-3xl text-xl hover:scale-125 transition-all ease-in-out" onClick={handleButtonClick}>Next</button>
            <br />
            <br />
            <p className="text-red-500 font-bold text-lg ">{errorMessage}</p>
            <span className="ml-8 text-slate-500">______________________________________________________________</span>
          </form>

          <div className="flex ml-28 mt-8">
            <p className="text-slate-400 ">Don't have an account?</p>
            <p className="underline text-white cursor-pointer ml-2"><Link to="/SignUp">Sign up for MusicSync.</Link></p>
          </div>
        </div>

        <div className="w-1/4 text-white float-right -mt-[800px]">
          <img src={image2} alt=""></img>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
