import React from "react";
import { MdCheck } from "react-icons/md";
import MainQuantity from "../../ui/MainQuantity";
import Button from "../../ui/Button";
import MainSize from "../../ui/MainSize";
import MainReviews from "../../ui/MainReviews";

const ProductDetails = ({ colors, sizes, check, setCheck, showReview }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="font-cairo font-bold">One Life Graphic T-shirt</h3>
      {/* product reviews */}
      <div>{!!showReview && <MainReviews rate={2.5} />}</div>
      {/* product price */}
      <div className="flex gap-2 items-center">
        <h4> $260 </h4>
        <h4 className="text-gray-400 line-through"> $200 </h4>
        <p className="bg-discountBackground text-discountColor  lg:p-discountLg rounded-buttonRadius p-discountSm">
          -40%
        </p>
      </div>
      <p className="text-descriptionColor">
        This graphic t-shirt which is perfect for any occasion. Crafted from a
        soft and breathable fabric, it offers superior comfort and style.
      </p>
      <hr className="text-descriptionColor" />
      {/* product colors */}
      <div>
        <p className="text-descriptionColor mb-4">select colors</p>
        <div className="flex gap-1">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`rounded-full  w-[37px] h-[37px] flex items-center justify-center cursor-pointer`}
              style={{ backgroundColor: color }}
              onClick={() => setCheck(index)}
            >
              {check === index && <MdCheck className="text-white" />}
            </div>
          ))}
        </div>
      </div>
      <hr className="text-descriptionColor" />
      {/* product sizez */}
      <div>
        <p className="mb-4 text-descriptionColor">choose sizes</p>
        <MainSize
          sizes={sizes}
          className={`rounded-buttonRadius p-sizeSm lg:p-sizeLg `}
        />
      </div>
      {/* product quantity */}
      <div className="flex gap-3 my-6">
        <MainQuantity quantity={1} />
        <Button className="lg:w-[400px] md:w-[200px] w-[236px]">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
