import React, { useEffect, useState } from 'react';
import AllInstructorCard from './AllInstructorCard';

const AllInstructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = 'https://b712-summer-camp-server-side-mhmahdi97.vercel.app/users?role=instructor';

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setAllInstructors(data)
            setLoading(false)
        })
    },  [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
               
                <div className="w-full mb-12">
                    <div className="lg:w-1/2 w-full mb-6 mx-auto lg:mb-0">
                        <h1 className="sm:text-4xl text-2xl text-center font-bold title-font mb-4 text-gray-900">Meet Our All  <span className='text-red-500'>Instructors</span></h1>
                        
                    </div>
                    <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-gray-500 text-center">Discover our top instructors, experts in their fields, who are committed to guiding you on your language learning journey. Learn from the best and unleash your language potential with their expertise and engaging teaching methods.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        loading ? <span className="loading loading-bars loading-lg mx-auto"></span> :
                        allInstructors.map(instructor => <AllInstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        ></AllInstructorCard>)
                    }
                </div>


            </div>
        </section>
    );
};

export default AllInstructors;