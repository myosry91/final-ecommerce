import { MdStarRate } from "react-icons/md";
function Card({ imageSrc, imageAlt, cardTitle, cardPrice }) {
  return (
    <div>
      <div className="flex flex-col">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-cardRadius max-w-full"
        />
        <h3 className="text-cardTitle font-cairo font-bold py-2">
          {cardTitle}
        </h3>
        <span className="flex gap-1">
          <MdStarRate className="text-iconStarColor text-cardRating" />
          <MdStarRate className="text-iconStarColor text-cardRating" />
          <MdStarRate className="text-iconStarColor text-cardRating" />
          <MdStarRate className="text-iconStarColor text-cardRating" />
          <MdStarRate className="text-iconStarColor text-cardRating" />
        </span>
        <span className="block text-cardPrice pt-2 font-bold">{cardPrice}</span>
      </div>
    </div>
  );
}

export default Card;
