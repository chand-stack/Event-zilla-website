import { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";

const Service = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="text-center my-10 space-y-3">
        <h1 className="text-3xl md:text-5xl  font-semibold">
          Provide Best{" "}
          <span className="font-mono text-pink-500">Services!</span>
        </h1>
        <p className="text-xl font-semibold mx-auto md:w-2/4">
          We can offer a stress free solution to help you, plan your dream event
          day, so you can enjoy every moment and treasure it forever.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 text-white gap-3">
        {card.map((item) => (
          <ServiceDetails key={item.id} item={item}></ServiceDetails>
        ))}
      </div>
    </div>
  );
};

export default Service;
