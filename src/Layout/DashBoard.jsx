import React from 'react';
import { Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const DashBoard = () => {

    const [isAdmin] = useAdmin();
    const[isInstructor] = useInstructor();
    console.log(isInstructor)

    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;