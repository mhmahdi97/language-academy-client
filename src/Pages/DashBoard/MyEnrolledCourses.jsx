import React from 'react';
import useEnrolledCourses from '../../hooks/useEnrolledCourse';

const MyEnrolledCourses = () => {
    const [enrolledCourses] = useEnrolledCourses();

    console.log(enrolledCourses)


    return (
        <div className="w-full mt-12">
            <div className="font-semibold ml-4 h-[60px]">
                <h3 className="text-3xl">My Enrolled Courses:</h3>
        
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledCourses.map((course, index) => <tr
                                key={course._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div>
                                        <div className="w-56">
                                            <img src={course.image} alt="course image" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {course.slogan}
                                </td>
                                <td>
                                    {course.instructorName}
                                </td>
                                <td >${course.price}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledCourses;