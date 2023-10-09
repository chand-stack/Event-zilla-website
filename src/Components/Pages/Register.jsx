import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';

const Register = () => {
    const {createUser,updateUser,loginWithGoogle} = useContext(AuthContext)

    const navigate = useNavigate()
    
    // console.log( navigate);

    const registerHandler = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value


        if(password.length<6){
            swal({
                icon: "error",
                title:"Your password must be at least 6 characters"
              });
              return
        }

        if(!/(?=.*[!@#$%^&*])/.test(password)){
            swal({
                icon: "error",
                title:"Password should contain atleast one special character"
              });
              return
        }
        if(!/(?=.*[A-Z])/.test(password)){
            swal({
                icon: "error",
                title:"Password should contain atleast one capital letter"
              });
              return
        }
        

        createUser(email,password)
        .then(result => {
            console.log(result.user)
            updateUser(name,photo)
            .then(()=>{
              window.location.reload()
            })
            navigate("/")
            .catch(()=>{})})
            swal({
              icon: "success",
              title:"Successfully Registered"
            })
        .catch(error => {
          swal({
            icon: "error",
            title:"email-already-in-use"
          });
            console.log(error)
        })
        
    }

    const googlehandler = () => {
      loginWithGoogle()
      .then(()=>{
        swal({
          icon: "success",
          title:"Successfully Registered"
        })
        navigate("/")
      })
      .catch(()=>{})
    }

    return (
        <div>
            <div className=" bg-white p-3 border-2 border-black my-5 mx-1 md:mx-auto lg:w-3/6 md:w-4/5">
  <div className=" flex-col ">
    <div className="my-2 ">
      <h1 className="text-5xl font-bold text-pink-500"><span className="text-black">Register</span> now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full  bg-base-100">
      <form onSubmit={registerHandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input type="text" 
          placeholder="Your Name" 
          name="name"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input type="text"
           placeholder="Your Photo Url" 
           name="photo"
           className="input input-bordered" />
        </div>
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
          <button type="submit" className="btn btn-primary bg-black text-pink-500 font-bold border-none">Create an account</button>
        </div>
        <p className="font-bold text-center">Already Have An Account? Please <Link to="/login" className="text-pink-500">Login</Link></p>

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

export default Register;