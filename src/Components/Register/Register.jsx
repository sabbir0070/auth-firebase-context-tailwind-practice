import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
const [error, setUser] = useState();
const {user,createUser,updateProfileName} = useContext(AuthContext);
console.log(createUser)

const handleRegister = (event) =>{
event.preventDefault();
const form = event.target;
const name = form.name.value;
const email = form.email.value;
const password = form.password.value;
// console.log(email,password,name)

createUser(email,password)
.then(result=>{
const loggedUser = result.user;
console.log(loggedUser)

})
.catch(error=>{
console.log(error.message)
})
}



  return (

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center mb-3">
      <h3 className="text-5xl font-bold">Please Register </h3>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder=" Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder=" Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
<p className='text-green-500'><small><Link to='/login'>Already Have An Account? Please Login</Link></small></p>
      </form>
    </div>
  </div>
</div>
  );
};

export default Register;