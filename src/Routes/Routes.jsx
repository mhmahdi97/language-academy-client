import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/404/ErrorPage";





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
                path: '/register',
                element: <Register></Register>
            }, 
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            }
        ]
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;