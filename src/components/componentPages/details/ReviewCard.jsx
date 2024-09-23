import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import MainReviews from "../../ui/MainReviews";

const ReviewCard = () => {
  return (
    <div className="border border-slate-400 py-7 px-8">
      <div className="flex px-2 justify-between">
        <MainReviews rate={5.5} />
        <BsThreeDots />
      </div>
      <div className="my-4 flex items-center gap-1">
        <p className="font-inter text-lg font-bold">Samantha D.</p>
        <MdVerified className="text-iconVerifiedBackground" />
      </div>
      <p className="text-descriptionColor">
        "I absolutely love this t-shirt! The design is unique and the fabric
        feels so comfortable. As a fellow designer, I appreciate the attention
        to detail. It's become my favorite go-to shirt."
      </p>
      <p className="text-descriptionColor mt-6">Posted on August 14, 2023</p>
    </div>
  );
};

export default ReviewCard;
