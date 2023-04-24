import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
   
      <div className="flex justify-between navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Project</a>
<div>
<Link to='/' className="btn btn-ghost normal-case text-xl" >Home</Link>      
<Link to='/login' className="btn btn-ghost normal-case text-xl" >Login</Link>      
<Link to='/register' className="btn btn-ghost normal-case text-xl" >Register</Link>
</div>      

</div>
    
  );
};

export default Header;