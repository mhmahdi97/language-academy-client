import React, { useEffect, useState } from 'react';
import PopularCoursesCard from './PopularCoursesCard';

const PopularCourses = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = 'http://localhost:5000/courses?status=approved'

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCourses(data)
            setLoading(false)
        })
    },  [])

    const sortedCourses = courses.sort((c1, c2) => {
        return c2.enrolled - c1.enrolled 
    } );


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
               
                <div className="w-full mb-12">
                    <div className="lg:w-1/2 w-full mb-6 mx-auto lg:mb-0">
                        <h1 className="sm:text-4xl text-2xl text-center font-bold title-font mb-4 text-gray-900"> Discover Our Popular <span className='text-red-500'>Language</span> Courses</h1>
                        
                    </div>
                    <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-gray-500 text-center">Explore our diverse range of popular language courses. From English to Spanish, Arabic to Chinese, our expert instructors will guide you on your language learning journey. Unlock new cultures and opportunities with our engaging courses.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        loading ? <span className="loading loading-bars loading-lg mx-auto"></span> :
                        sortedCourses.slice(0, 6).map(course => <PopularCoursesCard
                            key={course._id}
                            course={course}
                        ></PopularCoursesCard>)
                    }
                </div>

                {/* flex flex-wrap -m-4 */}

            </div>
        </section>
    );
};

export default PopularCourses;