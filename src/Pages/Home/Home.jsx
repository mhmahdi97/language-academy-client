import React from 'react';
import TopSlider from './TopSlider';
import PopularCourses from './PopularCourses';
import PopularInstructors from './PopularInstructors';

const Home = () => {
    return (
        <div>
            <TopSlider></TopSlider>
            <PopularCourses></PopularCourses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;