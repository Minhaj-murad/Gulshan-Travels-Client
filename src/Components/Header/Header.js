import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assests/images/img.png'
const Header = () => {
    const navItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>


        <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
        <li className='font-semibold'><Link to='/logout'>Logout</Link></li>


        <li className='font-semibold'><Link to='/login'>Login</Link></li>

    </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {navItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">
            <img className='w-10' src={img} alt="" />
            Explore Canada!!
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    );
};

export default Header;