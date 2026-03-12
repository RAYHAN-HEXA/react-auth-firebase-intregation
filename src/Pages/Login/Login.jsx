import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { use } from 'react';
import { auth } from '../../firebase/firebase.config';
import { AuthContext } from '../../Context/AuthContext/AuthContext';



const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const { signIn } = use(AuthContext)

  const handleLogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error =>{
      console.log(error.message)
    })
  }
 
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
       <form onSubmit={handleLogin} >
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
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