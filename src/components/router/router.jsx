import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../FrontPage/Home";
import Login from "../AuthenticationPage/Login";
import Register from "../AuthenticationPage/Register";
import PopularCollegeDetails from "../FrontPage/PopularCollegeDetails";
import College from "../RoutingPage/College";
import Admission from "../RoutingPage/Admission";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
                path: "collegeDetails/:id",
                element: <PopularCollegeDetails></PopularCollegeDetails>,
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
            }
        ]
    }
])
export default router;