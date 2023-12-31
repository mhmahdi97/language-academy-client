import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from '../Shared/SocialLogin';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const Register = () => {

    const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    let imgURL;

    const onSubmit = data =>{
        console.log(data)

        const formData = new FormData();
        formData.append('image', data.image[0])

        
        createUser(data.email, data.password)
        .then(result => {
                fetch(img_hosting_url, {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(imgResponse => {
                    if (imgResponse.success) {
                        imgURL = imgResponse.data.display_url;
                        updateUserProfile(data.name, imgURL)
                            .then(() => {
                                const saveUser = { name: data.name, email: data.email, photo: imgURL, role: 'user' }
                                fetch('https://b712-summer-camp-server-side-mhmahdi97.vercel.app/users', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(saveUser)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.insertedId) {
                                            reset();
                                            Swal.fire({
                                                position: 'top',
                                                icon: 'success',
                                                title: 'User Registered Successfully.',
                                                showConfirmButton: false,
                                                timer: 1500
                                            });
                                            navigate('/');
                                        }
                                    })
        
        
        
                            })
                            .catch(error => console.log(error))
                    }
                    else {
                        updateUserProfile(data.name, '')
                            .then(() => {
                                const saveUser = { name: data.name, email: data.email, photo: '', role: 'user' }
                                fetch('https://b712-summer-camp-server-side-mhmahdi97.vercel.app/users', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(saveUser)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.insertedId) {
                                            reset();
                                            Swal.fire({
                                                position: 'top',
                                                icon: 'success',
                                                title: 'User Registered Successfully.',
                                                showConfirmButton: false,
                                                timer: 1500
                                            });
                                            navigate('/');
                                        }
                                    })
        
        
        
                            })
                            .catch(error => console.log(error))
                    }
                })

        })

    }
    
    return (
        <>
            <div className="text-gray-600 body-font">
                
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-3xl font-medium title-font mb-5">Register to an Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Name*</label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter Your Name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Photo URL</label>
                            <input type="file" {...register("image")} placeholder="Enter Your Photo URL" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Email*</label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Enter Your Email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Password*</label>
                            <input type="password"
                            {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })}
                            placeholder="Enter Your Password" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one capital letter and one special character.</p>}
                           
                        </div>
                        
                        
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Confirm Password*</label>
                            <input type="password"
                            {...register("passwordConfirmation", {
                                    required: "Please confirm password!",
                                    validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || "Passwords should match!";
                                        }
                                    }
                                })}
                            placeholder="Confirm Password" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                               {errors.passwordConfirmation && (
                                    <p className='text-red-600'>
                                        {errors.passwordConfirmation.message}
                                    </p>
                                )}
                            
                        </div>
                        
                        
                        <button type='submit' className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Register</button>
                    </form>
                    <p className="text-xs text-gray-500 mt-3">
                        Already Have an Account? Login <Link to="/login" className="text-blue-600">Here</Link>
                    </p>
                    <SocialLogin></SocialLogin>

                    
                
                </div>

            </div>
        </>
    );
};

export default Register;