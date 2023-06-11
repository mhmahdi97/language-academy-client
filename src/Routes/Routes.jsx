import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/404/ErrorPage";
import AllCourses from "../Pages/AllCourses/AllCourses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }, 
            {
                path: '/instructors',
                element: <AllInstructors></AllInstructors>
            },
            {
                path: '/courses',
                element: <AllCourses></AllCourses>
            }
        ]
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;