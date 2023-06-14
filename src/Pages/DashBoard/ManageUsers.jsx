import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['all-users'], async () => {
        const res = await axiosSecure.get('/all-users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/users/admin/${user._id}`, {
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
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/users/instructor/${user._id}`, {
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
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    return (
        <div className="w-full mt-12">
            <h3 className="text-4xl text-center font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={()=>handleMakeAdmin(user)} className="btn btn-sm bg-slate-200" disabled={user.role === 'admin' ? true : false} >Make Admin</button>
                                    <button onClick={()=>handleMakeInstructor(user)} className="btn btn-sm bg-slate-200" disabled={user.role === 'instructor' ? true : false}>Make Instructor</button>
                                </td>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;