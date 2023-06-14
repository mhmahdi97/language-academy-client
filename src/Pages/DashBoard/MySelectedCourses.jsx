import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaTrashAlt } from "react-icons/fa";
import useSelectedCourses from '../../hooks/useSelectedCourses';

const MySelectedCourses = () => {
    const [selectedCourses, refetch] = useSelectedCourses();

    console.log(selectedCourses)


    
    const total = selectedCourses.reduce((sum, course) => course.price + sum, 0).toFixed(2);

    const handleDelete = course => {
        console.log(course)
        Swal.fire({
            title: 'Are You Sure to Remove the Course?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove This!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/selected-courses/${course._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'The Course Has Been Removed.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full mt-12">
            <div className="font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Courses: {selectedCourses.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
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
                            selectedCourses.map((course, index) => <tr
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
                                <td>
                                    <button onClick={() => handleDelete(course)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                    <Link to={`/dashboard/payment/${course._id}`}>
                                        <button className="btn btn-warning btn-sm ml-2">Pay</button>
                                    </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedCourses;