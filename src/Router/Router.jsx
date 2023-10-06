import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Booking from "../Pages/Booking/Booking";
import PrivateRouter from "./PrivateRouter";


const myCreatedRoute = createBrowserRouter([
        {
            path: '/',
            element: <MainLayouts></MainLayouts>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/destination',
                    element: <Destination></Destination>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/contact',
                    element: <Contact></Contact>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/registration',
                    element: <Register></Register>
                },
                {
                    path: '/booking',
                    element: <PrivateRouter> <Booking></Booking> </PrivateRouter>
                }

            ]
        }
])

export default myCreatedRoute;