import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
const [error, setError] = useState('');
const [success, setSuccess] = useState(''); 
const {signInUser,googleSignIn} = useContext(AuthContext);


const handleLogin = (event) =>{
event.preventDefault();
const form = event.target;
const name = form.name.value;
const email = form.email.value;
const password = form.password.value;
// console.log(email,password,name)
setError('');
setSuccess('')
signInUser(email,password)
.then(result=>{
const loggedUser = result.user;
console.log(loggedUser);
 setSuccess('User login Successful')
})
.catch(error=>{
setError(error.message)
})
}
const handleGoogleSignIn = () =>{
googleSignIn()
.then(result=>{
const loggedUser = result.user;
console.log(loggedUser)
setSuccess('Google login successful')
})
.catch(error=>{
setError(error.message)
})
}

  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center mb-3">
      <h3 className="text-5xl font-bold">Please Login! </h3>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <button onClick={handleGoogleSignIn} className="btn mt-3 btn-primary">Google Sign In</button>
        </div>
<p className='text-sky-500 text-center'><small><Link to='/register'>New Auth User? Please Register</Link></small></p>
<p className='text-red-500 text-center'>{error}</p>
<p className='text-green-500 text-center'>{success}</p>    
</form>
    </div>
  </div>
</div>
  );
};

export default Login;