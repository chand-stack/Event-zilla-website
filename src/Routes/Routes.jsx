import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Pages/Home";
import Detail from "../Components/Pages/Detail";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import PrivateRoute from "../Private/PrivateRoute";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
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
            }
        ]
    }
])

export default routes;