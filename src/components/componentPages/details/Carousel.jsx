import React, { useState } from "react";

const Carousel = ({ images = [] }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex lg:flex-row-reverse flex-col gap-3">
      <img
        src={images[active]}
        alt={`image${active}`}
        className=" mx-auto max-w-[300px] max-h-[300px]"
        loading="lazy"
      />
      <div className="flex flex-row lg:flex-col gap-2 ">
        {images.map((image, index) => (
          <div
            className={` ${active === index ? "opacity-50 border border-slate-900" : ""
              } cursor-pointer rounded-cardRadius `}
            key={index}
          >
            {" "}
            <img
              src={image}
              className="rounded-cardRadius max-w-20 "
              alt={`image${index}`}
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
