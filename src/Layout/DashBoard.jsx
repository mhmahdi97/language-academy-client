import React from 'react';
import { Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {

    const [isAdmin] = useAdmin();
    console.log(isAdmin)

    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;