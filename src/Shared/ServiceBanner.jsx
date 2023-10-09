import { TiTick } from "react-icons/ti";
import party from "../assets/threeparty.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { GiPartyPopper } from "react-icons/gi";
const ServiceBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Marquee className="bg-black" pauseOnHover={true}>
        <div className="text-xl md:text-2xl font-semibold py-5 bg-black text-pink-500 flex gap-16">
          <p className="flex items-center gap-2">
            Wedding Event
            <GiPartyPopper />
          </p>{" "}
          <p className="flex items-center gap-2">
            Private Event
            <GiPartyPopper />
          </p>{" "}
          <p className="flex items-center gap-2">
            Corporate Event <GiPartyPopper />
          </p>{" "}
          <p className="flex items-center gap-2">
            Birthday Event
            <GiPartyPopper />
          </p>{" "}
          <p className="flex items-center gap-2">
            Themed Event
            <GiPartyPopper />
          </p>{" "}
          <p className="flex items-center gap-2">Holiday Event</p>
        </div>
      </Marquee>
      <div className="flex flex-col-reverse lg:flex-row my-9 gap-5">
        <img
          data-aos="fade-up"
          data-aos-duration="3000"
          className="lg:h-96 md:h-[500px] md:w-[500px] mx-auto lg:mx-0"
          src={party}
          alt=""
        />
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="space-y-5 flex flex-col"
        >
          <h1 className="text-3xl md:text-5xl flex-grow text-center font-semibold lg:text-start">
            We are provide <span className="text-pink-500">experience</span> and
            best <span className="text-pink-500">events services</span>
          </h1>
          <p className="text-gray-600 flex-grow text-center lg:text-start">
            Our event planning and coordination services are designed for Any
            Sized budget, meaning anyone. Our events coordination services are
            designed.
          </p>
          <p className="text-gray-600 flex-grow text-center lg:text-start">
            From concept development to execution, we will take care of
            everything for your event, so you can relax and enjoy the big day.
            Our experienced event planners will work with you to understand your
            needs and goals, and then develop a customized plan to bring your
            event to life.
          </p>
          <section className="space-y-8">
            <p className="flex items-center gap-2">
              <TiTick className="text-3xl text-pink-500" />
              We will take care of everything from concept development to
              execution, so you can relax and enjoy your event.
            </p>
            <p className="flex items-center gap-2">
              <TiTick className="text-3xl text-pink-500" />
              Our online and offline registration and ticketing services make it
              easy for you to manage your event attendees.
            </p>
            <p className="flex items-center gap-2">
              <TiTick className="text-3xl text-pink-500" />
              We will help you create a buzz around your event and attract
              attendees with our expertise in event marketing and promotion.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceBanner;
