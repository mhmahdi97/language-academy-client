import React, { useEffect, useState } from 'react';
import AllCoursesCard from './AllCoursesCard';

const AllCourses = () => {
    const [Allcourses, setCourses] = useState([]);
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

    return (
        <section className="text-gray-600 body-font mt-12">
            <div className="container px-5 mx-auto">
               
                <div className="w-full mb-12">
                    <div className="lg:w-1/2 w-full mb-6 mx-auto lg:mb-0">
                        <h1 className="sm:text-4xl text-2xl text-center font-bold title-font mb-4 text-gray-900"> Finde Our All <span className='text-red-500'>Language</span> Courses</h1>
                        
                    </div>
                    <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-gray-500 text-center">Experience our renowned language courses with top-notch instructors. Delve into a world of languages, from English to Spanish, Arabic to Chinese, and embark on a transformative journey of cultural exploration and linguistic mastery.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        loading ? <span className="loading loading-bars loading-lg mx-auto"></span> :
                        Allcourses.map(course => <AllCoursesCard
                            key={course._id}
                            course={course}
                        ></AllCoursesCard>)
                    }
                </div>

            </div>
        </section>
    );
};

export default AllCourses;