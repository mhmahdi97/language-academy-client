import React from 'react';
import useMyCourses from '../../hooks/useMyCourses';
import { FaEdit } from 'react-icons/fa';

const MyCourses = () => {
    const [myCourses] = useMyCourses();

    return (
        <div className="w-full mt-12">
            <div className="font-semibold h-[60px] mb-16 flex justify-evenly items-center">
                <h3 className="text-4xl">Courses You Have Added</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Enrolled Student</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCourses.map((course, index) => <tr
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
                                    {course.status}
                                </td>
                                <td className='text-center'>
                                    {course.enrolled}
                                </td>
                                <td >
                                    {course.feedback}
                                </td>
                                <td>
                                    <button className="btn"><FaEdit></FaEdit></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCourses;