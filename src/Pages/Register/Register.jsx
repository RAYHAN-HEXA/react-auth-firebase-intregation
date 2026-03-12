import { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";




const Register = () => {
  
   const {createUser} = use(AuthContext)
  const handleRegister = (e) =>{
     e.preventDefault();
      const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email,password)
    .then(result =>{
        const user = result.user;
        console.log(user)
    }
    )
    .catch(error =>{
        console.log('error',error.message)
    })
    


  }
    // Register //
    // const handleRegister = (e)=>{
    //     e.preventDefault();   
    //     const name = e.target.name.value;
    //     const photo = e.target.photo.value;          
    //    const email = e.target.email.value;
    //    const password =e.target.password.value;
    //    console.log('name',name,'photo',photo,'email',email,'password',password)
    // //Register With Email and Password //
    // createUserWithEmailAndPassword(auth,email,password)
    // .then(result =>{
    //     const user = result.user;
    //     console.log(user)
    // } )
    // .catch(error =>{
    //     console.log('error',error.message)
    // })


    // }
    return (
        <div className="hero bg-base-200 min-h-screen">
           
  <div className="hero-content ">

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
          {/* Name Field */}
          <label className="label">Name</label>
          <input type="text" className="input" name = 'name' placeholder="name" />
          {/* photo Filed */}
          <label className="label">Photo</label>
          <input type="text" className="input" name = 'photo' placeholder="photo" />
          {/* Email Filed */}
          <label className="label">Email</label>
          <input type="email" className="input" name = 'email' placeholder="Email" />
          {/* Password Field */}
          <label className="label">Password</label>
          <input type="password" className="input" name = 'password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register Now </button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;