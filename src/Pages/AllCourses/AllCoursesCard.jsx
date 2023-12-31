import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const AllCoursesCard = ({course}) => {

    const {name, slogan, image, enrolled, instructorName, availableSeats, price, _id} = course;
    
    const [isAdmin] = useAdmin();
    const[isInstructor] = useInstructor();

    const {user} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

     const handleSelect = (course)=> {
        if(user && user.email){
            const selectedCourse = {selectedCourseId: _id, name, slogan, instructorName, image, price, availableSeats, enrolled, email: user.email}
            fetch('https://b712-summer-camp-server-side-mhmahdi97.vercel.app/selected-courses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedCourse)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `The ${slogan} Course Has Been Selected!`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login to Select the Course!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
     }


    return (
        <div className=" p-4">
            <div className={`${availableSeats === 0 ? 'bg-red-200' : 'bg-gray-100'} p-6 rounded-lg`}>
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="courses" />
            <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">{name}</h3>
            <h2 className="text-lg text-gray-900 font-bold title-font mb-4">{slogan}</h2>
            <p className="leading-relaxed text-base mb-3"> <span className='font-medium'>Instructor Name:</span> {instructorName}</p>
            <p className="leading-relaxed text-base mb-3"> <span className='font-medium'>Available Seats:</span> {availableSeats}</p>
            <p className="leading-relaxed text-base mb-3"> <span className='font-medium'>Students Enrolled:</span> {enrolled}</p>
            <p className="leading-relaxed text-base mb-7"> <span className='font-medium'>Price:</span>  ${price}</p>
            <button disabled={availableSeats === 0 || isAdmin || isInstructor ? true : false} onClick={()=>handleSelect(course)} className={`${availableSeats === 0 || isAdmin || isInstructor ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'} text-white border-0 py-2 px-5 focus:outline-none  rounded text-lg`}>Select Course <FaCartPlus></FaCartPlus></button>
            </div>
        </div>
    );
};

export default AllCoursesCard;