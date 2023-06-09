import React from 'react';

const Register = () => {
    return (
        <>
            <div className="text-gray-600 body-font">
                
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-3xl font-medium title-font mb-5">Register to an Account</h2>
                    <form onSubmit={handleRegister}>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Photo URL</label>
                            <input type="text" name="photo" placeholder="Enter Your Photo URL" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                            <p className='text-red-600 text-lg mt-2'>{error}</p> 
                        </div>
                        <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Register</button>
                    </form>
                    <p className="text-xs text-gray-500 mt-3">
                        Already Have an Account? Login <Link to="/login" className="text-blue-600">Here</Link>
                    </p>

                    
                
                </div>

            </div>
        </>
    );
};

export default Register;