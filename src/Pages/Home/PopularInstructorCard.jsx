import React from 'react';

const PopularInstructorCard = ({instructor}) => {
    const {name, photo, coursName, enrolled} = instructor;

    return (
        <div className=" p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={photo} alt="content" />
            <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">{coursName}</h3>
            <h2 className="text-lg text-gray-900 font-bold title-font mb-1">{name}</h2>
            <p className='mb-4'><span className='text-red-500 font-semibold'>{enrolled}+ </span>Students</p>
            </div>
        </div>
    );
};

export default PopularInstructorCard;