import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-display container mx-auto">
            <Outlet/>
        </div>
    );
};

export default Root;