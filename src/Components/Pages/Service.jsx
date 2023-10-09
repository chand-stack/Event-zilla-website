import bg from "../../assets/post-img4.jpg";
import { FaRegSmileBeam } from "react-icons/fa";
import { TfiGift } from "react-icons/tfi";
import { IoDiamondOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import {
  PiClockClockwiseDuotone,
  PiShootingStarFill,
  PiSunglassesBold,
} from "react-icons/pi";
import img from "../../assets/1-7.jpg";
import imgtwo from "../../assets/2-4.jpg";
const Service = () => {
  return (
    <>
      <div
        className="h-72 md:h-[60vh]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="h-full w-full bg-black bg-opacity-80 text-white text-3xl md:text-5xl lg:text-7xl font-semibold flex justify-center items-center">
          <span className="text-pink-500">Serv</span>ices
        </h1>
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center my-7 md:my-16">
        The{" "}
        <span className="font-semibold text-pink-500">Event Management</span>{" "}
        Specialists
      </h1>

      <p className="text-xl md:text-2xl text-center my-7">
        From Wedding Functions to Birthday Parties or Corporate Events to
        Musical Functions, We offer full range of Events Management Services
        that scale to your needs & budget.
      </p>

      <div className="grid gridc md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-1 md:px-5 lg:gap-10">
        <div className="space-y-3 lg:space-x-6">
          <p className="flex items-center gap-3 font-semibold text-2xl justify-center md:justify-start">
            <FaRegSmileBeam className="text-4xl text-pink-500" />
            Anniversaries
          </p>
          <p className="text-lg font-medium">
            An anniversary event celebrates a milestone, be it in relationships
            or businesses. It is a gathering to honor achievements, share
            memories, and enjoy the journey over the years.
          </p>
        </div>

        <div className="space-y-3 lg:space-x-6">
          <p className="flex items-center gap-3 font-semibold text-2xl justify-center md:justify-start">
            <TfiGift className="text-4xl text-pink-500" />
            Holiday Parties
          </p>
          <p className="text-lg font-medium">
            Holiday parties are lively gatherings during festive times, bringing
            joy and togetherness. They feature food, drinks, gifts, and themed
            activities, providing a perfect backdrop for creating wonderful
            memories with loved ones.
          </p>
        </div>
        <div className="space-y-3 lg:space-x-6">
          <p className="flex items-center gap-3 font-semibold text-2xl justify-center md:justify-start">
            <PiClockClockwiseDuotone className="text-4xl text-pink-500" />
            Corporate Functions
          </p>
          <p className="text-lg font-medium">
            Corporate functions are professional events hosted by businesses.
            They serve various purposes: team building, product launches,
            conferences, or celebrations. Focused on networking, growth, and
            achieving business goals in a structured and organized manner.
          </p>
        </div>
        <div className="space-y-3 lg:space-x-6">
          <p className="flex items-center gap-3 font-semibold text-2xl justify-center md:justify-start">
            <PiShootingStarFill className="text-4xl text-pink-500" />
            Fashion Concerts
          </p>
          <p className="text-lg font-medium">
            Fashion concerts fuse music and style, showcasing designer
            collections. Models strut down the runway as live music sets the
            vibe. A harmonious celebration of fashion and art, captivating the
            audience with trendsetting designs and musical beats.
          </p>
        </div>
        <div className="space-y-3 lg:space-x-6">
          <p className="flex items-center gap-3 font-semibold text-2xl justify-center md:justify-start">
            <PiSunglassesBold className="text-4xl text-pink-500" />
            Conference Planning
          </p>
          <p className="text-lg font-medium">
            Conference planning involves meticulous organization for successful
            business or academic gatherings. It includes venue selection,
            scheduling, speaker arrangements, logistics, and technology setup.
            Seamless execution to ensure a productive and engaging event,
            advancing knowledge and collaboration.
          </p>
        </div>
        <div className="space-y-3 lg:space-x-6">
          <p className="flex items-center gap-3 font-semibold text-2xl justify-center md:justify-start">
            <IoDiamondOutline className="text-4xl text-pink-500" />
            Stage Decorations
          </p>
          <p className="text-lg font-medium">
            Stage decorations enhance event ambiance. From lighting to
            backdrops, they set the mood and theme. Creativity and precision
            transform stages into captivating focal points, amplifying the
            events impact and leaving a lasting impression on the audience.
          </p>
        </div>
      </div>

      <div
        className="h-56 md:h-72"
        style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }}
      >
        <div className="h-full w-full text-center bg-pink-500 bg-opacity-80 text-white font-semibold">
          <h1 className="text-xl pt-12 md:pt-20 md:text-3xl">
            With a full range of Event Planning Services, our Clients have
            Successful & Prosperous Events!
          </h1>
          <p className="md:text-xl">
            We make your events smart & impactful by personalised event
            management services.
          </p>
        </div>
      </div>

      <div className="mt-5 md:mt-16">
        <div className="md:flex justify-center">
          <img src={img} alt="" />
          <img src={imgtwo} alt="" />
        </div>
        <div className="space-y-4 my-5">
          <h1 className="text-3xl md:text-5xl text-center">
            <span className="text-pink-500">EventZilla</span> -{" "}
            <span className="font-semibold">Events That Lasts</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold">
            You should choose Dvents Services because we bring your guests
            closer to you & helps you to create a relationship that lasts long!
          </p>
          <p className="text-lg font-normal">
            Eventzilla is a top choice for event management. With its
            user-friendly interface, easy event creation, and robust features
            like ticketing, registration, and analytics, it simplifies the event
            planning process. Cost-effective pricing, customization options, and
            seamless attendee experience make Eventzilla the go-to platform for
            successful, stress-free events.
          </p>
          <p className=" flex items-center gap-3 text-lg font-semibold">
            <TiTickOutline className="text-pink-500" />
            Easy event creation and management.
          </p>
          <p className=" flex items-center gap-3 text-lg font-semibold">
            <TiTickOutline className="text-pink-500" />
            Streamlined ticketing and registration.
          </p>
          <p className=" flex items-center gap-3 text-lg font-semibold">
            <TiTickOutline className="text-pink-500" />
            Comprehensive analytics for insights.
          </p>
          <p className=" flex items-center gap-3 text-lg font-semibold">
            <TiTickOutline className="text-pink-500" />
            Cost-effective and user-friendly interface.
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
