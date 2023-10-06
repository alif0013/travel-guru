import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('User logged Out successfully');
            })
            .catch(err => {
                console.log(err);
            })
    }

    console.log('User:', user); 
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/destination'>Destination</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case w-36"><img src={Logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">

                <ul>
                    <input type="text" placeholder="Search Your Destination" className="input input-bordered mr-5" />
                </ul>

                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>

                             <span>{user.email}</span>
                              <Link to='/' onClick={handleLogOut}  className="btn bg-[#F9A51A]">LogOut</Link>
                        </> 
                        :
                        <NavLink to='/login' className="btn bg-[#F9A51A]">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;