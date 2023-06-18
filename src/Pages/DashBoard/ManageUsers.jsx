import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../providers/AuthProvider';
// import { deleteUser } from 'firebase/auth';
import avatar from '../../assets/avatar.png';



const ManageUsers = () => {
    const {user} = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['all-users'], async () => {
        const res = await axiosSecure.get('/all-users')
        return res.data;
    })

    const handleMakeAdmin = dbUser =>{
        fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/users/make-admin/${dbUser._id}`, {
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
                    title: `${dbUser.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = dbUser =>{
        fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/users/make-instructor/${dbUser._id}`, {
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
                    title: `${dbUser.name} is a Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    const handleMakeUser = dbUser =>{
        fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/users/make-user/${dbUser._id}`, {
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
                    title: `${dbUser.name} is an User Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    // const handleDelete = (dbUser, user ) =>{

       

    //  Swal.fire({
    //             title: 'Are You Sure to Delete the User?',
    //             text: "You won't be able to revert this!",
    //             icon: 'warning',
    //             showCancelButton: true,
    //             confirmButtonColor: '#3085d6',
    //             cancelButtonColor: '#d33',
    //             confirmButtonText: 'Yes, Delete The User!'
    //         }).then((result) => {
    //             if (result.isConfirmed) {


    //                  deleteUser(user)
    //                 .then(() => {
                    
    //                     fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/users/delete-user/${dbUser._id}`, {
    //                         method: 'DELETE'
    //                     })
    //                         .then(res => res.json())
    //                         .then(data => {
    //                             if (data.deletedCount > 0) {
    //                                 refetch();
    //                                 Swal.fire(
    //                                     'Deleted!',
    //                                     'The User Has Been Deleted.',
    //                                     'success'
    //                                 )
    //                             }
    //                         })
                
    //                 })
    //                 .catch((error) => {
    //                     console.log(error)
    //                 });

    //             }
    //         })


    // }


    return (
        <div className="w-full mt-12">
            <h3 className="text-4xl text-center font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((dbUser, index) => <tr key={dbUser._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className='avatar'>
                                        <div className="w-14 rounded-full">
                                            <img src={dbUser.photo ? dbUser.photo : avatar} alt="user photo" />
                                        </div>
                                    </div>
                                
                                </td>
                                <td>{dbUser.name}</td>
                                <td>{dbUser.email}</td>
                                <td>{dbUser.role}</td>
                                <td className='flex flex-col justify-center'>
                                    
                                    {dbUser.role !== 'admin' ? 

                                        <button onClick={()=>handleMakeAdmin(dbUser)} className="btn btn-sm bg-slate-200">Make Admin</button>
                                    : 
                                    <></>}
                                    {dbUser.role !== 'instructor' ? 

                                        <button onClick={()=>handleMakeInstructor(dbUser)} className="btn btn-sm bg-slate-200">Make Instructor</button>
                                    : 
                                    <></>}
                                    {dbUser.role !== 'user' ? 

                                        <button onClick={()=>handleMakeUser(dbUser)} className="btn btn-sm bg-slate-200">Make User</button>
                                    : 
                                    <></>}
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    {/* <button onClick={()=>handleMakeInstructor(user)} className="btn btn-sm bg-slate-200" disabled={user.role === 'instructor' ? true : false}>Make Instructor</button> */}
                                    {/* <button onClick={()=>handleMakeUser(user)} className="btn btn-sm bg-slate-200" disabled={user.role === 'user' ? true : false}>Make User</button> */}
                                    {/* <button onClick={()=>handleDelete(dbUser, user)} className="btn btn-sm bg-red-200">Delete User</button> */}
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