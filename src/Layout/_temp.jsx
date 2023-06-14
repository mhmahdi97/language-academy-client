import React from 'react';

const _temp = () => {
    return (
        <div>
            {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manage-courses">Manage Courses</NavLink></li>
                            <li><NavLink to="/dashboard/manage-users">Manage Users</NavLink></li>
                        </> :
                        isInstructor ? <>
                            <li><NavLink to="/dashboard/add-course">User Home</NavLink></li>
                            <li><NavLink to="/dashboard/my-courses"> Reservations</NavLink></li>
                        </> : <>
                        
                        </>
                    }
        </div>
    );
};

export default _temp;