import React from 'react';
import TopSlider from './TopSlider';
import PopularCourses from './PopularCourses';
import PopularInstructors from './PopularInstructors';
import ContactUs from './ContactUs';
import ToggleDarkLight from './ToggleDarkLight';

const Home = () => {
    return (
        <div>
            <ToggleDarkLight></ToggleDarkLight>
            <TopSlider></TopSlider>
            <PopularCourses></PopularCourses>
            <PopularInstructors></PopularInstructors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;