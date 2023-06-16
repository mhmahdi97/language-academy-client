import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { FaArrowLeft, FaBook, FaPlusCircle, FaShoppingCart, FaUsers } from 'react-icons/fa';


const DashBoard = () => {

    const [isAdmin] = useAdmin();
    const[isInstructor] = useInstructor();
    
    const role = isAdmin ? 'Admin' : isInstructor ? 'Instructor' : 'Student'


    return (
        <>  
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <h1 className='text-4xl font-semibold mt-12'>Welcome to <span className='text-red-500'>{role}</span> Dahsboard!!!</h1>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 h-full font-semibold bg-base-200 text-base-content">
                        <h1 className='text-3xl text-center mb-7'>Dashboard Items</h1>
                        <Link to='/'>
                            <button className="btn btn-sm bg-slate-200 mb-11"> <FaArrowLeft></FaArrowLeft> Back to Home</button>
                        </Link>
                    {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/manage-courses">Manage Courses  <FaBook></FaBook></NavLink></li>
                                <li><NavLink to="/dashboard/manage-users">Manage Users <FaUsers></FaUsers> </NavLink></li>
                            </> :
                            isInstructor ? <>
                                <li><NavLink to="/dashboard/add-course">Add Course <FaPlusCircle></FaPlusCircle></NavLink></li>
                                <li><NavLink to="/dashboard/my-courses"> My Courses  <FaBook></FaBook> </NavLink></li>
                            </> : <>
                                <li><NavLink to="/dashboard/my-selected-courses">My Selected Course <FaShoppingCart></FaShoppingCart> </NavLink></li>
                                <li><NavLink to="/dashboard/my-enrolled-courses">My Enrolled Courses <FaBook></FaBook> </NavLink></li>
                                <li><NavLink to="/dashboard/payments-history">Payment History </NavLink></li>
                            </>
                        }
                    </ul>

                    
                
                </div>
            </div>
        </>
    );
};

export default DashBoard;