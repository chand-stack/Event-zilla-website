import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Pages/Home";
import Detail from "../Components/Pages/Detail";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import PrivateRoute from "../Private/PrivateRoute";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import Blog from "../Components/Pages/Blog";
import Service from "../Components/Pages/Service";
import Portfolio from "../Components/Pages/Portfolio";
import Error from "../Components/Pages/Error";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/detail/:id",
                element:<PrivateRoute><Detail/></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/services",
                element:<PrivateRoute><Service/></PrivateRoute>
            },
            {
                path:"/portfolio",
                element:<PrivateRoute><Portfolio/></PrivateRoute>
            }
        ]
    }
])

export default routes;