import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Authentication from "../layout/Authentication";
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";
import Services from "../pages/Services/Services";
import Checkout from "../pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";
import Bookings from "../pages/Bookings/Bookings";
import Loading from "../shared/Loading/Loading";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "services/:_id",
                element: <Services></Services>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params._id}`)
            },
            {
                path: "bookings",
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: "checkout/:_id",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params._id}`)
            },
            {
                path: "about",
                element: <Loading></Loading>
            }
        ]
    },
    {
        path: "auth",
        element: <Authentication></Authentication>,
        children: [
            {
                path: "signin",
                element: <Signin></Signin>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            }
        ]
    }
]);

export default router;