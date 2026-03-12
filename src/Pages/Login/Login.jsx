import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.config';



const googleProvider = new GoogleAuthProvider();
const Login = () => {
    // Google SignIn //
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth,googleProvider)
  .then(result =>{
    const user = result.user;
    console.log(user)
  })
  .catch(error =>{
    console.log('error',error.message)
  })


  }
    return (
        <div className="hero bg-base-200 min-h-screen">
           
  <div className="hero-content ">

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold">Login now!</h1>
      <div className="card-body">
       <form >
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
            <button onClick={handleGoogleSignIn} className="btn btn-neutral mt-4">Login with Google</button>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;