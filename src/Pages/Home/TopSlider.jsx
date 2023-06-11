import React from "react";

import img1 from '../../assets/slider-image/1.png';
import img2 from '../../assets/slider-image/2.png';
import img3 from '../../assets/slider-image/3.png';


const TopSlider = () => {
    return (
        <div className="carousel w-full h-[75vh] mt-28 md:mt-16">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="w-full lg:w-1/2 mx-auto pl-5 lg:pl-20 lg:mx-0">
                    <h1 className="text-4xl text-white font-bold mb-7">Unlock the World with Language Academy!</h1>
                    <p className="mb-6 text-lg text-white">Welcome to Language Academy, your gateway to mastering foreign languages. Our renowned instructors are here to guide you on an exciting language learning journey. Whether you're interested in English, Arabic, Chinese, French, Japanese, Urdu, Hindi, or any other language, we offer the best courses in the city. Join us and open doors to new cultures, opportunities, and friendships!</p>
                </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="w-full lg:w-1/2 mx-auto pl-5 lg:pl-20 lg:mx-0">
                    <h1 className="text-4xl text-white font-bold mb-7">Expert Instructors, Exceptional Learning Experience</h1>
                    <p className="mb-6 text-lg text-white">At Language Academy, we pride ourselves on our team of experienced and dedicated instructors. Our instructors are native speakers and language enthusiasts, ensuring an authentic and immersive learning experience. With their expertise, innovative teaching methods, and personalized attention, you'll develop strong language skills and gain confidence in your abilities. Get ready to learn from the best!</p>
                </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="w-full lg:w-1/2 mx-auto pl-5 lg:pl-20 lg:mx-0">
                    <h1 className="text-4xl text-white font-bold mb-7">Tailored Courses for Every Learning Style</h1>
                    <p className="mb-6 text-lg text-white">We understand that everyone learns differently. That's why Language Academy offers a wide range of courses tailored to suit your learning style and goals. Whether you prefer interactive group classes, one-on-one sessions, or online learning, we've got you covered. Our flexible schedules and comprehensive curriculum ensure that you make progress at your own pace. Join us and embark on an enriching language learning adventure!</p>
                </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default TopSlider;