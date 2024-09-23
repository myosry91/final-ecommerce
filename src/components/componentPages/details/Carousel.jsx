import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex lg:flex-row-reverse flex-col gap-3">
      <img
        src={images[active]}
        alt="tshirt"
        className="w-full lg:w-[444px] mx-auto "
      />
      <div className="flex flex-row lg:flex-col justify-between gap-2 ">
        {images.map((image, index) => (
          <div
            className={`lg:w-[152px]  w-[111px] ${
              active === index ? "opacity-50 border border-slate-900" : ""
            } cursor-pointer rounded-cardRadius `}
            key={index}
          >
            {" "}
            <img
              src={image}
              alt="tshirt"
              onClick={() => setActive(index)}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
