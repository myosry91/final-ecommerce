import { MdStarRate } from "react-icons/md";
import MainReviews from "./MainReviews";
// API gives a product object that contains data
function Card({ imageSrc, imageAlt, cardTitle, cardPrice, discount, oldPrice }) {
  return (
    <div>
      <div className="flex flex-col ">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-cardRadius max-w-full select-none"
        />
        <h3 className="text-cardTitle font-cairo font-bold py-2">
          {cardTitle}
        </h3>
        <span>
          <MainReviews rate="5.5" />
        </span>
        <span className=" text-cardPrice pt-2 font-bold flex gap-3 items-center">
          <p className="font-bold">{cardPrice}</p>
          <p className="line-through text-descriptionColor font-bold" >{oldPrice}</p>
          {discount != null ? <p className="bg-discountBackground text-discountColor rounded-cardRadius p-discountSm">{ discount}</p> : ""}
        </span>
      </div>
    </div>
  );
}

export default Card;
