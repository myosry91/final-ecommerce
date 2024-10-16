import React, { useState } from "react";

const Carousel = ({ images = [] }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex lg:flex-row-reverse flex-col gap-3">
      <img
        src={images[active]}
        alt="tshirt"
        className=" mx-auto max-h-[400px]"
        loading="lazy"
      />
      <div className="flex flex-row lg:flex-col gap-2 ">
        {images.map((image, index) => (
          <div
            className={`lg:w-[111px]  w-[111px] ${active === index ? "opacity-50 border border-slate-900" : ""
              } cursor-pointer rounded-cardRadius `}
            key={index}
          >
            {" "}
            <img
              src={image}
              className="rounded-cardRadius w-full h-[120px]"
              alt="tshirt"
              loading="lazy"
              onClick={() => setActive(index)}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
