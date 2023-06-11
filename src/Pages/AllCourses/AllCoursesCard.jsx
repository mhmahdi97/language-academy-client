import React, { useState } from 'react';

const AllCoursesCard = ({course}) => {

    const {name, slogan, image, instructorName, availableSeats, price, _id} = course;
    
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

     const handleSelect = (_id)=> {

     }





    return (
        <div className=" p-4">
            <div className={`${availableSeats === 0 ? 'bg-red-200' : 'bg-gray-100'} p-6 rounded-lg`}>
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="courses" />
            <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">{name}</h3>
            <h2 className="text-lg text-gray-900 font-bold title-font mb-4">{slogan}</h2>
            <p className="leading-relaxed text-base mb-3"> <span className='font-medium'>Instructor Name:</span> {instructorName}</p>
            <p className="leading-relaxed text-base mb-3"> <span className='font-medium'>Available Seats:</span> {availableSeats}</p>
            <p className="leading-relaxed text-base mb-7"> <span className='font-medium'>Price:</span>  ${price}</p>
            <button disabled={availableSeats === 0 ? true : false} onClick={()=>handleSelect(_id)} className={`${availableSeats === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'} text-white border-0 py-2 px-5 focus:outline-none  rounded text-lg`}>Select Course</button>
            </div>
        </div>
    );
};

export default AllCoursesCard;