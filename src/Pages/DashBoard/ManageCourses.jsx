import React from 'react';
import useCourses from '../../hooks/useCourses';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageCourses = () => {
    const [courses, loading, refetch] = useCourses();

    const handleApprove = (course) => {
        fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/courses/approved/${course._id}`, {
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
         fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/courses/denied/${course._id}`, {
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

    const handleDelete = course => {
        console.log(course)
        Swal.fire({
            title: 'Are You Sure to Delete the Course?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete This!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/delete-course/${course._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'The Course Has Been Deleted!',
                                'success'
                            )
                        }
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
                                        <div className="w-48">
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
                                    <button onClick={()=>handleDelete(course)} className="btn btn-sm bg-slate-200">Delete</button>
                                    {
                                        course.status === 'denied' ? <Link to={`/dashboard/admin-feedback/${course._id}`}>
                                        <button className="btn btn-sm bg-slate-200">Send Feedback</button>
                                    </Link> : <></>
                                    }

                                    
                                    


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