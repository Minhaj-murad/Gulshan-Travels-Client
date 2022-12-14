import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assests/images/img.png'
import './Header.css'
import { AuthContext } from '../AuthProvider/Authprovider';
import { FaUser } from 'react-icons/fa';
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  const navItems = <>
    <li className='font-semibold text-amber-600'><Link to='/'>Home</Link></li>
    {
      user?.email ?
        <>
          <li className='font-semibold text-amber-600'><Link to='/myreviews'>My Reviews</Link></li>
          <li className='font-semibold text-amber-600'><Link to='/addhotels'>Add Hotels</Link></li>
          <li className='font-semibold text-amber-600'><Link onClick={handleLogOut}>Logout</Link></li>

        </>
        :
       <> 
        <li className='font-semibold text-amber-600'><Link to='/login'>Login</Link></li> </>
    }

    <li className='font-semibold'>
    <Link to="/profile" className='text-white'>
      
        <h1 className='rounded-full mt-2' style={{ height: '30px' }}>{user?.displayName}  </h1>

      
    
    </Link>
    </li>
    <li className='font-semibold'>
    <Link to="/profile" className='text-amber-600'>
      {user?.photoURL ?
        <img className='rounded-full ' style={{ height: '30px' }} src={user?.photoURL} alt="" />

        : <FaUser></FaUser>
      }
    </Link>
    </li>
   
  </>

  return (
    <div className="navbar h-20 mb-12 pt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ml-12">
            {navItems}
            
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl gap-4 -mt-6">
          <img className='w-16 ' src={img} alt="" />
          <h1 className='company-name text-amber-600 font-extrabold text-3xl'> Gulshan Travels!</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ml-24">
          {navItems}
          <li className='font-semibold text-amber-600'><Link to='/blog'>My Blog</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn text-amber-600">Book Now</Link>
      </div>
    </div>
  );
};

export default Header;