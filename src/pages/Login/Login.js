import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { providerLogin, login } = useContext(AuthContext);
    const [error, setError] = useState()
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIN = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                setError(' ')
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, { replace: true });
                setError(' ')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    return (
        <div className="hero mb-10 min-h-screen bg-[url('/src/assets/login.jpg')]">
            <div className='hero-overlay flex justify-center bg-opacity-70'>
                <div className="card  w-full my-auto max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-5xl font-bold text-center'>Login</h2>
                        <form onSubmit={handleSubmit}>
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
                                <button className="btn btn-outline">Login</button>
                            </div>
                        </form>
                        <label className="label">
                            <p>New to this site? <Link to='/signup' className='text-red-600 cursor-pointer'>SignUp</Link></p>
                        </label>
                        <label className="label text-red-500">
                            {error}
                        </label>
                        <div className="divider"></div>
                        <button onClick={handleGoogleSignIN} className='flex self-center align-middle btn font-bold px-14'>
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