import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';
import './Login.css'
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { login,googlesignin } = useContext(AuthContext);
    const googleprovider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })

            })
            .then(error => console.log(error));
    }

    const handlegooglesign = () => {
        googlesignin(googleprovider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })

                
            })
            .catch(error => console.error(error));
    }

    return (
        <div className=" hero w-9/12 mx-auto my-20">
            <div className=''>
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">

                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100  text-amber-600 py-20">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-amber-600">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-amber-600">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-amber-600">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New to Gulshan Travels? <Link className='text-blue-600 font-bold' to="/signup">Sign Up</Link> </p>
                        <div className='w-56  gap-2 mx-auto'>
                            <h1 className='text-center'>Or, Sign in with </h1>
                            <span><button onClick={handlegooglesign} className='bg-amber-600 py-1 px-2 rounded-lg text-center w-28 mx-auto flex items-center gap-4 border border-gray-700 text-black'><FaGoogle></FaGoogle> Google </button></span>

                        </div>

                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000" className=" text-center lg:text-left">

                        <div>
                            <h1 className='login-text text-6xl font-bold text-amber-600'>Get 20% off within 31st December,2022</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;