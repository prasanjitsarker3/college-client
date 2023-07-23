import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../FrontPage/Home";
import Login from "../AuthenticationPage/Login";
import Register from "../AuthenticationPage/Register";
import PopularCollegeDetails from "../FrontPage/PopularCollegeDetails";
import College from "../RoutingPage/College";
import Admission from "../RoutingPage/Admission";
import MyCollege from "../RoutingPage/MyCollege";
import PrivateRoute from "../AuthenticationPage/PrivateRoute";
import ProfileInformation from "../RoutingPage/ProfileInformation";
import ErrorPage from "../RoutingPage/ErrorPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "college",
                element: <College></College>
            }
            ,
            {
                path: "admission",
                element: <Admission></Admission>
            }
            ,
            {
                path: "myCollege",
                element: <MyCollege></MyCollege> 
            }
            ,
            {
                path: "collegeDetails/:id",
                element:<PrivateRoute> <PopularCollegeDetails></PopularCollegeDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/college/${params.id}`)
            }
            ,
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path:"profile",
                element:<ProfileInformation></ProfileInformation>
            }
          
        ]
    }
])
export default router;