import { Link } from "react-router-dom";
import errorImg from "../../assets/errorwithlandscape.jpg";

const Error = () => {
  return (
    <div className="relative">
      <img className="mx-auto" src={errorImg} alt="" />
      <div className="flex justify-center">
        <Link to="/">
          {" "}
          <button className="btn btn-secondary absolute bottom-10 text-white bg-purple-500 border-none">
            Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
