import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceDetails = ({ item }) => {
  const { name, image, price, short_detail, id } = item;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="flex flex-col md:flex-row gap-3 m-1 bg-black bg-opacity-80 p-2 rounded-md"
    >
      <img className="h-60" src={image} alt="" />
      <div className="flex flex-col">
        <h1 className="flex-grow text-xl font-semibold text-pink-500">
          {name}
        </h1>
        <p className="flex-grow font-semibold border-b">{short_detail}</p>
        <p className="flex-grow font-semibold">{price}$</p>
        <Link to={`/detail/${id}`}>
          <button className="btn text-white bg-pink-500 border-none hover:text-black">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

ServiceDetails.propTypes = {
  item: PropTypes.object,
};
export default ServiceDetails;
