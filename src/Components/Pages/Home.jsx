import Banner from "../../Shared/Banner";
import Customer from "../../Shared/Customer";
import Service from "../../Shared/Service";
import ServiceBanner from "../../Shared/ServiceBanner";
import ServiceVarity from "../../Shared/ServiceVarity";

const Home = () => {
    return (
        <div>
           <div><Banner/></div>
           <ServiceBanner/>
            <Service/>
            <ServiceVarity/>
            <div className=" text-center mt-10 lg:mt-20">
                <h1 className="text-3xl md:text-5xl lg:text-7xl">What Our <span className="font-medium text-pink-500">Customers</span> Say!</h1>
                <p className="font-semibold md:w-3/6 mx-auto text-xl text-gray-600">Planning a Wedding, Proposal, Corporate or Event in our busy city is not so easy, and it takes skills to make it all look easy-going</p>
            </div>
            
            <Customer/>
            
        </div>
    );
};

export default Home;