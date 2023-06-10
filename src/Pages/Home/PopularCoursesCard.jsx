import React from 'react';

const PopularCoursesCard = ({course}) => {

    const {name, slogan, image, description} = course;



    return (
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 h-[480px] rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="content" />
            <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">{name}</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{slogan}</h2>
            <p className="leading-relaxed text-base">{description}</p>
            </div>
        </div>
    );
};

export default PopularCoursesCard;