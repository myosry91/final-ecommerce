import React from "react";
import MainQuantity from "../../ui/MainQuantity";
import Button from "../../ui/Button";
import MainSize from "../../ui/MainSize";
import MainReviews from "../../ui/MainReviews";
import Color from "../../ui/Color";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { AddToCart } from "../../../redux/features/cartsSlice"; 

const ProductDetails = ({ product }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="font-cairo font-bold">{product.title}</h3>
      {/* product reviews */}
      <div><MainReviews rate={product.ratingsAverage} /></div>
      {/* product price */}
      <div className="flex gap-2 items-center">
        <h4> {product.priceAfterDiscount} </h4>
        <h4 className="text-gray-400 line-through"> {product.price} </h4>
        <p className="bg-discountBackground text-discountColor  lg:p-discountLg rounded-buttonRadius p-discountSm">
          -40%
        </p>
      </div>
      <p className="text-descriptionColor">
        {product.description}
      </p>
      <hr className="text-descriptionColor" />
      {/* product colors */}
      <div>
        <p className="text-descriptionColor mb-4">select colors</p>
        <Color colors={product.colors} />
      </div>
      <hr className="text-descriptionColor" />
      {/* product sizes */}
      <div>
        <p className="mb-4 text-descriptionColor">choose sizes</p>
        <MainSize
          sizes={[product.size]}
          className={`rounded-buttonRadius p-sizeSm lg:p-sizeLg `}
        />
      </div>
      {/* product quantity */}
      <div className="flex gap-3 my-6">
        <MainQuantity quantity={product.quantity} />
        <Button className="lg:w-[400px] md:w-[200px] w-[236px]">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
