import React, { useEffect, useState } from 'react';
import PopularCoursesCard from './PopularCoursesCard';

const PopularCourses = () => {

    const [courses, setCourses] = useState([]);
    const url = 'http://localhost:5000/courses'

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setCourses(data))
    },  [])

    return (
        <section className="text-gray-600 body-font mt-12">
            <div className="container px-5 py-24 mx-auto">
               
                <div className="w-full mb-12">
                    <div className="lg:w-1/2 w-full mb-6 mx-auto lg:mb-0">
                        <h1 className="sm:text-4xl text-2xl text-center font-bold title-font mb-4 text-gray-900"> Discover Our Popular <span className='text-red-500'>Language</span> Courses</h1>
                        
                    </div>
                    <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-gray-500 text-center">Explore our diverse range of popular language courses. From English to Spanish, Arabic to Chinese, our expert instructors will guide you on your language learning journey. Unlock new cultures and opportunities with our engaging courses.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        courses.map(course => <PopularCoursesCard
                            key={course._id}
                            course={course}
                        ></PopularCoursesCard>)
                    }
                </div>

            </div>
        </section>
    );
};

export default PopularCourses;