import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;

                setError(' ')
                form.reset();
                navigate('/login')
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(error => {
                setError(error.message)

            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((e) => { console.error(e) })
    }
    return (
        <div className="hero mb-10 min-h-screen bg-[url('/src/assets/login.jpg')]">
            <div className='hero-overlay flex justify-center bg-opacity-70'>
                <div className="card  w-full my-auto max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-5xl font-bold text-center'>SignUp</h2>
                        <form onSubmit={handleSubmit}>
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
                                <input name='photoURL' type="text" placeholder="(Please provide short link. E.g: 'imagebb' )" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Your Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Signup</button>
                            </div>
                        </form>
                        <label className="label">
                            <p>Already have an account? <Link to='/login' className='text-red-600 cursor-pointer'>Login</Link></p>
                        </label>
                        <label className="label text-red-500">
                            {error}
                        </label>

                    </div>
                </div >
            </div>
        </div >
    );
};

export default SignUp;