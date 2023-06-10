import React, { useEffect, useState } from 'react';
import AllCoursesCard from './AllCoursesCard';

const AllCourses = () => {
    const [Allcourses, setCourses] = useState([]);
    const url = 'http://localhost:5000/courses'

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setCourses(data))
    },  [])

    return (
        <section className="text-gray-600 body-font mt-12">
            <div className="container px-5 mx-auto">
               
                <div className="w-full mb-12">
                    <div className="lg:w-1/2 w-full mb-6 mx-auto lg:mb-0">
                        <h1 className="sm:text-4xl text-2xl text-center font-bold title-font mb-4 text-gray-900"> Finde Our All <span className='text-red-500'>Language</span> Courses</h1>
                        
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
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