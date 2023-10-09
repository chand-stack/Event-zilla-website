import bg from "../../assets/wepik.jpeg";
import png from "../../assets/img-01-335x433.png";
import png1 from "../../assets/img-02-335x433.png";
import png2 from "../../assets/img-03-335x433.png";
import postimg from "../../assets/post-img1.jpg";
import postimg1 from "../../assets/post-img4.jpg";
const Portfolio = () => {
  return (
    <>
      <div
        className="h-72 md:h-[60vh]"
        style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }}
      >
        <h1 className="h-full w-full bg-black bg-opacity-80 text-white text-3xl md:text-5xl lg:text-7xl font-semibold flex justify-center items-center">
          <span className="text-pink-500">Port</span>folio
        </h1>
      </div>

      <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 px-1 md:px-5">
        <div className="card bg-base-100 shadow-xl hover:bg-black hover:text-white hover:duration-1000 ">
          <figure>
            <img className="p-2" src={png} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Kids Birthday Party
              <div className="badge badge-secondary">BirthDays</div>
            </h2>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl hover:bg-black hover:text-white hover:duration-1000">
          <figure>
            <img className="p-2" src={png1} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              LightFox Night Party
              <div className="badge badge-secondary">BirthDays</div>
            </h2>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl hover:bg-black hover:text-white hover:duration-1000">
          <figure>
            <img className="p-2" src={png2} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Halloween Party
              <div className="badge badge-secondary">Private Party</div>
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl hover:bg-black hover:text-white hover:duration-1000">
          <figure>
            <img className="p-2" src={png2} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bowmi Proposal Events
              <div className="badge badge-secondary">
                Corporate, Private Party
              </div>
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl hover:bg-black hover:text-white hover:duration-1000">
          <figure>
            <img className="p-2" src={png} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Autue Art Gallery Opening
              <div className="badge badge-secondary">Private Party</div>
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl hover:bg-black hover:text-white hover:duration-1000">
          <figure>
            <img className="p-2" src={png1} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Grand Despa Events
              <div className="badge h-fit badge-secondary">BirthDays</div>
            </h2>
          </div>
        </div>
      </div>

      <h1 className="text-3xl p-1 md:text-4xl md:w-3/4 mx-auto text-center my-14">
        Engaging event attendees can be difficult and blowing them away is even
        harder.
      </h1>

      <div>
        <div className="lg:flex items-center p-1">
          <img className="md:h-96 mx-auto" src={postimg} alt="" />
          <div className="md:w-2/4 mx-auto">
            <p className="font-semibold">
              Capturing and retaining audience attention at events is
              challenging, and truly wowing them is an even greater feat. Making
              every moment count and leaving a lasting impression demands
              strategic planning and engaging experiences.
            </p>
            <p className="font-semibold">
              Connecting with event attendees can pose a challenge, but dazzling
              them with an unforgettable experience is an art. Engaging every
              guest requires thoughtful strategies and carefully curated events
              that go above and beyond expectations.
            </p>
          </div>
        </div>
      </div>

      <div
        className="h-72 md:h-[60vh]"
        style={{
          backgroundImage: `url(${postimg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="h-full w-full py-20 bg-black bg-opacity-80 text-white text-3xl md:text-5xl lg:text-7xl font-semibold text-center">
          AFFORDABLE <span className="text-pink-500">Event PLANNER </span>AND{" "}
          <span className="text-pink-500">EVENTS </span>COORDINATOR!
        </h1>
      </div>
      </div>
    </>
  );
};

export default Portfolio;
