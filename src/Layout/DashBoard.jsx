import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';


const DashBoard = () => {

    const [isAdmin] = useAdmin();
    const[isInstructor] = useInstructor();
    ;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <h1 className='text-3xl text-center mb-7'>Dashboard Items</h1>
                 {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manage-courses">Manage Courses</NavLink></li>
                            <li><NavLink to="/dashboard/manage-users">Manage Users</NavLink></li>
                        </> :
                        isInstructor ? <>
                            <li><NavLink to="/dashboard/add-course">Add Courses</NavLink></li>
                            <li><NavLink to="/dashboard/my-courses"> My Courses</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/my-selected-courses">My Selected Courses</NavLink></li>
                        </>
                    }
                </ul>
            
            </div>
        </div>
    );
};

export default DashBoard;