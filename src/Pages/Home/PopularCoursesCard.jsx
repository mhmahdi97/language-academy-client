import React from 'react';

const PopularCoursesCard = ({course}) => {

    const {name, slogan, image, description, enrolled} = course;



    return (
        <div className=" p-4">
            <div className="bg-gray-100 p-6 h-[430px] rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="content" />
            <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">{name}</h3>
            <h2 className="text-lg text-gray-900 font-bold title-font mb-1">{slogan}</h2>
            <p className='mb-4'><span className='text-red-500 font-semibold'>{enrolled}+ </span>Students</p>
            <p className="leading-relaxed text-base">{description}</p>
            </div>
            {/* xl:w-1/4 md:w-1/2 */}
        </div>
    );
};

export default PopularCoursesCard;