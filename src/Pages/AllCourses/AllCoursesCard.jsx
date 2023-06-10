import React from 'react';

const AllCoursesCard = ({course}) => {
    const {name, slogan, image, instructorName, availableSeats, price} = course;



    return (
        <div className=" p-4">
            <div className="bg-gray-100 p-6 h-[480px] rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="courses" />
            <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">{name}</h3>
            <h2 className="text-lg text-gray-900 font-bold title-font mb-4">{slogan}</h2>
            <p className="leading-relaxed text-base mb-3"> <span className='font-medium'>Instructor Name:</span> {instructorName}</p>
            <p className="leading-relaxed text-base mb-3"> <span className='font-medium'>Available Seats:</span> {availableSeats}</p>
            <p className="leading-relaxed text-base mb-3"> <span className='font-medium'>Price:</span>  ${price}</p>
            </div>
        </div>
    );
};

export default AllCoursesCard;