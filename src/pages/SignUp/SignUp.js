import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero mb-10 min-h-screen bg-[url('/src/assets/login.jpg')]">
            <div className='hero-overlay flex justify-center bg-opacity-70'>
                <div className="card  w-full my-auto max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-5xl font-bold text-center'>SignUp</h2>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='photoURL' type="text" placeholder="Your Photo URL" className="input input-bordered" />
                            </div>
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
                                <button className="btn btn-outline">Signup</button>
                            </div>
                        </form>
                        <label className="label">
                            <p>Already have an account? <Link to='/login' className='text-red-600 cursor-pointer'>Login</Link></p>
                        </label>

                    </div>
                </div >
            </div>
        </div >
    );
};

export default SignUp;