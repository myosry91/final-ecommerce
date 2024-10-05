import { MdStarRate } from "react-icons/md";
import MainReviews from "./MainReviews";
import { lazy } from "react";
// API gives a product object that contains data
function Card({ imageSrc, imageAlt, cardTitle, cardPrice, discount, oldPrice }) {
  return (
    <div>
      <div className="flex flex-col ">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="rounded-cardRadius max-w-full select-none"
        />
        <h3 className="text-cardTitle font-cairo font-bold py-2 lg:text-xl text-base ">
          {cardTitle}
        </h3>
        <span>
          <MainReviews rate="5.5" />
        </span>
        <span className=" text-cardPrice pt-2 font-bold flex gap-3 items-center">
          <p className="font-bold lg:text-2xl text-lg ">{cardPrice}</p>
          <p className="line-through text-descriptionColor font-bold lg:text-2xl text-lg" >{oldPrice}</p>
          {discount != null ? <p className="bg-discountBackground text-discountColor rounded-cardRadius text-base p-discountSm">{discount}</p> : ""}
        </span>
      </div>
    </div>
  );
}

export default Card;
