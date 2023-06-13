import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddCourse = () => {
    const {user} = useContext(AuthContext);
    const preLoadedValues = {
        instructorName: user?.displayName,
        instructorEmail: user?.email
    }
    
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

        console.log(data)
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, slogan, instructorEmail, instructorName, availableSeats, description} = data;
                const newCourse = {name,  instructorEmail, instructorName, image:imgURL, availableSeats: parseFloat(availableSeats), enrolled: 0, price: parseFloat(price), status: 'pending', slogan, description, feedback: ''}
                console.log(newCourse)
                axiosSecure.post('/courses', newCourse)
                .then(data => {
                    console.log('after posting course', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Course Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    
    return (
        <div className="w-full px-10 mt-12">
            <h1 className='text-4xl font-bold text-center mb-8'>Add Your Course Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Course Name/Slogan*</span>
                    </label>
                    <input type="text" placeholder="Course Name"
                        {...register("slogan", { required: true })}
                        className="input input-bordered w-full " />
                        {errors.slogan && <span className="text-red-600">Course Name is Required!!</span>}
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Language Name*</span>
                    </label>
                    <input type="text" placeholder="Language Name"
                        {...register("name", { required: true })}
                        className="input input-bordered w-full " />
                        {errors.name && <span className="text-red-600">Language Name is Required!!</span>}
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" {...register("instructorName", { required: true })} placeholder="Instructor Name" className="input input-bordered w-full" defaultValue={preLoadedValues.instructorName} readOnly  />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email*</span>
                        </label>
                        <input type="text" {...register("instructorEmail", { required: true })} placeholder="Instructor Email" className="input input-bordered w-full" defaultValue={preLoadedValues.instructorEmail} readOnly />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                        {errors.price && <span className="text-red-600">Price is Required!!</span>}
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats*</span>
                        </label>
                        <input type="text" {...register("availableSeats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full " />
                        {errors.availableSeats && <span className="text-red-600">Available Seats is Required!!</span>}
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Description</span>
                    </label>
                    <textarea {...register("description", {maxLength: 200})} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    {errors.description && <span className="text-red-600">You Have Reached Maximum Lenght of Description!!</span>}
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Image*</span>
                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full " />
                    {errors.image && <span className="text-red-600">Image File is Required!!</span>}
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Course" />
            </form>
        </div>
    );
};

export default AddCourse;