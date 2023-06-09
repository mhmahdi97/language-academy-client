import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {

    const [error, setError] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        console.log(data)

        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'User Login Successfull!',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                if(error.message === 'Firebase: Error (auth/wrong-password).') {
                setError('You Have Entered a Wrong Password!!!')
                
            }
                else if (error.message === 'Firebase: Error (auth/configuration-not-found).' ||'Firebase: Error (auth/user-not-found).') {
                    setError('Account Not Found!!!')
                }
            })




    }


    return (
        <div className="text-gray-600 body-font">
            
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-3xl font-medium title-font mb-5">Login to Your Account</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" {...register("password", { required: true })} placeholder="Enter Your Password" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <p className='text-red-600 text-lg mt-2'>{error}</p> 
                    </div>
                    <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Login</button>
                </form>
                <p className="text-xs text-gray-500 mt-3">
                    Dont Have Account? Please <Link to="/register" className=" text-blue-600">Register</Link>
                </p>
                <SocialLogin></SocialLogin>   
            </div>

        </div>
    );
};

export default Login;