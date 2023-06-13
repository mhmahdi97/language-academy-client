import React from 'react';
import TopSlider from './TopSlider';
import PopularCourses from './PopularCourses';
import PopularInstructors from './PopularInstructors';
import ContactUs from './ContactUs';
import ToggleDarkLight from './ToggleDarkLight';
import { Slide } from "react-awesome-reveal";

const Home = () => {
    return (
        <div>
            <ToggleDarkLight></ToggleDarkLight>
            <Slide>
                <TopSlider></TopSlider>
                <PopularCourses></PopularCourses>
                <PopularInstructors></PopularInstructors>
                <ContactUs></ContactUs>
            </Slide>
        </div>
    );
};

export default Home;