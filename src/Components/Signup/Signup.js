import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }



    return (
        <div>
             <div className=" hero w-9/12 mx-auto my-20">
            <div className=''>
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">

                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100  text-amber-600 py-20">
                        <h1 className="text-5xl text-center font-bold">Register</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-amber-600">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
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
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='text-center'>Already Have an account? <Link className='text-amber-600 font-bold' to="/login">Log in</Link> </p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000" className=" text-center lg:text-left">

                        <div>
                            <h1 className='login-text text-6xl font-bold text-amber-600'>Get 20% off within 31st December,2022</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;