import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ServiceDetails = ({item}) => {
    console.log(item);
    const {name,image,price,short_detail} = item;


    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div data-aos="fade-up"
        data-aos-duration="3000"  className="flex flex-col md:flex-row gap-3 m-1 bg-black bg-opacity-80 p-2 rounded-md">
            <img className="h-60" src={image} alt="" />
            <div className="flex flex-col">
                <h1 className="flex-grow text-xl font-semibold text-pink-500">{name}</h1>
                <p className="flex-grow font-semibold">{short_detail}</p>
                <p className="flex-grow font-semibold">{price}$</p>
                <button className="btn text-white bg-pink-500 border-none hover:text-black">View Details</button>
            </div>
        </div>
    );
};

export default ServiceDetails;