import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { BiUser } from 'react-icons/bi';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error =>
                console.error(error)
            )
    }
    const menuItems = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/foods'>Foods</Link></li>
        <li className='font-bold'><Link to='/'>About Us</Link></li>
    </>
    return (
        <div className="navbar bg-neutral rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}

                    </ul>
                </div>
                <img src={logo} className='px-3' width='80' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>


                            <p className='mr-3'>{user?.displayName}</p>
                            {user?.photoURL ?
                                < img width='30' className="mask mr-2 mask-squircle" alt='' src={user?.photoURL
                                } />
                                :
                                <BiUser />
                            }
                            <Link to='/login'><button onClick={handleLogOut} className='btn btn-outline'>Logout</button></Link>
                        </>
                        :
                        <Link to='/login'><button className='btn btn-outline'>Login</button></Link>

                }

            </div>
        </div>
    );
};

export default Header;