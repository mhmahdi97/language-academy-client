import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/404/ErrorPage";
import AllCourses from "../Pages/AllCourses/AllCourses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import DashBoard from "../Layout/DashBoard";
import MySelectedCourses from "../Pages/DashBoard/MySelectedCourses";
import AddCourse from "../Pages/DashBoard/AddCourse";
import MyCourses from "../Pages/DashBoard/MyCourses";
import ManageCourses from "../Pages/DashBoard/ManageCourses";
import AdminFeedback from "../Pages/DashBoard/AdminFeedback";
import ManageUsers from "../Pages/DashBoard/ManageUsers";
import PrivateRoute from "./PrivateRoute"
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";


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
      path: 'dashboard',
      element: <PrivateRoute> <DashBoard></DashBoard> </PrivateRoute>, 
      children: [
        // student routes
        {
          path: 'my-selected-courses',
          element: <PrivateRoute> <MySelectedCourses></MySelectedCourses> </PrivateRoute>
        },

        // instructor routes
        {
          path: 'add-course',
          element: <InstructorRoute> <AddCourse></AddCourse> </InstructorRoute>
        },
        {
          path: 'my-courses',
          element: <InstructorRoute><MyCourses></MyCourses></InstructorRoute>
        },
        
        // admin routes
        {
          path: 'manage-courses',
          element: <AdminRoute><ManageCourses></ManageCourses></AdminRoute>
        },
        {
          path: 'manage-users',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'admin-feedback/:id',
          element: <AdminRoute><AdminFeedback></AdminFeedback></AdminRoute>,
          loader: ({params}) => fetch(`https://b712-summer-camp-server-side-mhmahdi97.vercel.app/courses/${params.id}`) 
        },

      ]
    },    
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;