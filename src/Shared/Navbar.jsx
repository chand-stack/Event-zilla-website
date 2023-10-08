import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import userimg from '../assets/icons8-user.gif'

const Navbar = () => {

  const {user,logout} = useContext(AuthContext)
  const [userName,setUserName] = useState(null)

  useEffect(()=>{
setUserName(user?.displayName)
  },[user])
    const links = <>
    <li className="font-semibold text-xl"><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-pink-400 underline" : ""
  }
>
  Home
</NavLink></li>
    <li className="font-semibold text-xl"><NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-pink-500" : ""
  }
>
  About Us
</NavLink></li>
    <li className="font-semibold text-xl"><NavLink
  to="/contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-pink-500" : ""
  }
>
  Contact Us
</NavLink></li>
    </>

    const navigate = useNavigate()

    const handleLogout = () =>{
      logout()
      .then(()=>{
        navigate("/")
      })
      .catch(()=>{})
    }

    return (
        <div className="sticky top-0 z-10">
            <div className="navbar bg-black md:py-4 shadow-md  text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
        {links}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl md:text-3xl">EventZilla</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className="flex items-center gap-3">
        <p>{userName}</p>
        <div>
        <img className="rounded-full h-14" src={user?.photoURL ? user?.photoURL : userimg} alt="" />
        </div>
         <button onClick={handleLogout} className="btn btn-outline text-white">Log Out</button>
      </div> : <Link to="/login"><button className="btn btn-outline text-white">Login</button></Link>
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;