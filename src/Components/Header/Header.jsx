import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaBeer, FaRegUserCircle } from 'react-icons/fa'

const Header = () => {
const {user,logOut} = useContext(AuthContext);
 
const handleLogOut = () =>{
logOut()
.then(()=>{})
.catch(error=>{
console.log(error.message)
})
}

 return (
   
      <div className="flex justify-between navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Project</a>
<div>
<Link to='/' className="btn btn-ghost normal-case text-xl" >Home</Link>      
{user && <Link to='/order' className="btn btn-ghost normal-case text-xl" >Order</Link>      }
<Link to='/login' className="btn btn-ghost normal-case text-xl" >Login</Link>      
<Link to='/register' className="btn btn-ghost normal-case text-xl" >Register</Link>
<Link to='/profile' className="btn btn-ghost normal-case text-xl" > <FaRegUserCircle className='text-green-700 text-3xl ' ></FaRegUserCircle> </Link>

{
user ?<><span className='text-red-500'>{user.email}</span> <button onClick={handleLogOut} className="btn btn-xs">SignOut</button> </>  : <Link to="/login"><button className="btn btn-xs">SignIn</button></Link>
}
</div>      
</div>
    
  );
};

export default Header;