import React from 'react';
import useCourses from '../../hooks/useCourses';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageCourses = () => {
    const [courses, loading, refetch] = useCourses();

    const handleApprove = (course) => {
        fetch(`http://localhost:5000/courses/approved/${course._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `${course.slogan} Course is Approved!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDeny = (course) => {
         fetch(`http://localhost:5000/courses/denied/${course._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `${course.slogan} Course is Denied!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className="w-full mt-12">
            <div className="font-semibold h-[60px] mb-16 flex justify-evenly items-center">
                <h3 className="text-4xl">Manage Courses</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) => <tr
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
                                <td className='text-center'>
                                    {course.instructorEmail}
                                </td>
                                <td >
                                    {course.availableSeats}
                                </td>
                                <td >
                                    {course.price}
                                </td>
                                <td >
                                    {course.status}
                                </td>
                                <td>
                                    <button onClick={()=>handleApprove(course)} className="btn btn-sm bg-slate-200" disabled={course.status === 'approved' || course.status === 'denied' ? true : false} >Approve</button>
                                    <button onClick={()=>handleDeny(course)} className="btn btn-sm bg-slate-200" disabled={course.status === 'approved' || course.status === 'denied' ? true : false}>Deny</button>
                                    <Link to={`/dashboard/admin-feedback/${course._id}`}>
                                        <button className="btn btn-sm bg-slate-200">Send Feedback</button>
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

export default ManageCourses;