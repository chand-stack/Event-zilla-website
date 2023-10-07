import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className=" bg-white p-3 border-2 border-black my-5 mx-auto lg:w-3/6 md:w-4/5">
  <div className=" flex-col ">
    <div className="my-2 ">
      <h1 className="text-5xl font-bold text-pink-500"><span className="text-black">Login</span> now!</h1>
      <Link><button>Continue with google</button></Link>
    </div>
    <div className="card flex-shrink-0 w-full  bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p className="label-text-alt link link-hover font-bold">Forgot password?</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-black text-pink-500 font-bold border-none">Login</button>
        </div>
        <p className="font-bold text-center">Do Not Have An Account? Please <Link to="/register" className="text-pink-500">Register</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;