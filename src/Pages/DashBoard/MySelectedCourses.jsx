import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaTrashAlt } from "react-icons/fa";
// import useAuth from '../../hooks/useAuth';

const MySelectedCourses = () => {
    const { user } = useContext(AuthContext);
    // const {user} = useAuth;
    const email = user?.email;

    const [selectedCourses, setSelectedCourses] = useState([]);
    const url = `http://localhost:5000/selected-courses?email=${email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setSelectedCourses(data))
    }, [user])

    console.log(selectedCourses)


    
    const total = selectedCourses.reduce((sum, course) => course.price + sum, 0);

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
                fetch(`http://localhost:5000/selected-courses/${course._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // refetch();
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
        <div className="w-full">
            <div className="font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Courses: {selectedCourses.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <Link to="">
                    <button className="btn btn-warning btn-sm">Pay</button>
                </Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
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
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.image} alt="course image" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {course.slogan}
                                </td>
                                <td >${course.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(course)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
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