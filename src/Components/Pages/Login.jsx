import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';


const Login = () => {

  const {loginWithGoogle,loginUser} = useContext(AuthContext)

  const location = useLocation()
  
  const navigate = useNavigate()

  const loginHandler = e => {
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value 
    loginUser(email,password)
    .then(()=>{
      swal({
        icon: "success",
        title:"Successfully logged in"
      });
      navigate(location?.state || "/")
    })
    .catch(error =>{
      console.log(error.message)
      swal({
        icon: "error",
        title:"invalid-login-credentials"
      });
    })
  }


  const googlehandler = () => {
    loginWithGoogle()
    .then(()=>{
      swal({
        icon: "success",
        title:"Successfully logged in"
      });
      navigate(location?.state || "/")
    })
    .catch(()=>{
      swal({
        icon: "error",
        title:"email-already-in-use"
      });
    })
  }
    return (
        <div>
            <div className=" bg-white  p-3 border-2 border-black my-5 mx-1 md:mx-auto lg:w-3/6 md:w-4/5">
  <div className=" flex-col ">
    <div className="my-2">
      <h1 className="text-5xl font-bold text-pink-500"><span className="text-black">Login</span> now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full  bg-base-100">
      <form onSubmit={loginHandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" 
          placeholder="email" 
          name="email"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" 
          placeholder="password" 
          name="password"
          className="input input-bordered" required />
          <label className="label">
            <p className="label-text-alt link link-hover font-bold">Forgot password?</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary bg-black text-pink-500 font-bold border-none">Login</button>
        </div>
        <p className="font-bold text-center">Do Not Have An Account? Please <Link to="/register" className="text-pink-500">Register</Link></p>
        <p className="text-center my-3 font-bold text-xl">---Or---</p>
        <div className="flex justify-center">
        <button onClick={googlehandler} className="btn btn-outline font-extrabold flex justify-center"><FcGoogle className="text-2xl"/>Continue with google</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;