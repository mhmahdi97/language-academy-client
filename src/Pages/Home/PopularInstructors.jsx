import React, { useEffect, useState } from 'react';
import PopularInstructorCard from './PopularInstructorCard';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = 'http://localhost:5000/users?role=instructor';

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setInstructors(data)
            setLoading(false)
        })
    },  [])

    const sortedInstructors = instructors.sort((i1, i2) => {
        return i2.enrolled - i1.enrolled 
    } );
    console.log(sortedInstructors);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
               
                <div className="w-full mb-12">
                    <div className="lg:w-1/2 w-full mb-6 mx-auto lg:mb-0">
                        <h1 className="sm:text-4xl text-2xl text-center font-bold title-font mb-4 text-gray-900">Meet Our Top  <span className='text-red-500'>Instructors</span></h1>
                        
                    </div>
                    <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-gray-500 text-center">Meet our top instructors who are passionate about teaching and dedicated to helping you master your language skills. They bring years of experience, expertise, and a dynamic teaching style to create an engaging learning environment. Discover the perfect instructor who will guide you on your language learning journey and unlock your full potential.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        loading ? <span className="loading loading-bars loading-lg mx-auto"></span> :
                        sortedInstructors.slice(0, 6).map(instructor => <PopularInstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        ></PopularInstructorCard>)
                    }
                </div>


            </div>
        </section>
    );
};

export default PopularInstructors;