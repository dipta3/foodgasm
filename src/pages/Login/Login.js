import React from 'react';
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
    return (
        <div className="hero mb-10 min-h-screen bg-[url('/src/assets/login.jpg')]">
            <div className='hero-overlay flex justify-center bg-opacity-70'>
                <div className="card  w-full my-auto max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-5xl font-bold text-center'>Login</h2>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Your Password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Login</button>
                            </div>
                        </form>
                        <label className="label">
                            <p>New to this site? <Link to='/signup' className='text-red-600 cursor-pointer'>SignUp</Link></p>
                        </label>
                        <div className="divider"></div>
                        <button className='flex self-center align-middle btn font-bold px-14'>
                            <BsGoogle />
                            <p className='ml-2'>SignIn With Google</p>
                        </button>
                    </div>
                </div >
            </div>
        </div >

    );
};

export default Login;