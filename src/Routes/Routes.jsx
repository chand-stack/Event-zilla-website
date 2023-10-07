import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Pages/Home";
import Detail from "../Components/Pages/Detail";
import Login from "../Components/Pages/Login";

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
                element:<Detail/>,
                loader: () => fetch('/data.json')
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
])

export default routes;