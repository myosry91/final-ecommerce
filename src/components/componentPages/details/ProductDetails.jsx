import React, { useEffect } from "react";
import MainQuantity from "../../ui/MainQuantity";
import Button from "../../ui/Button";
import MainSize from "../../ui/MainSize";
import MainReviews from "../../ui/MainReviews";
import Color from "../../ui/Color";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { AddToCart } from "../../../redux/features/cartsSlice"; 
import { getLoggedUser } from "../../../redux/features/loginSlice";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const {user} = useSelector((store)=> store.login)
  console.log(user)
  useEffect(() => {
  dispatch(getLoggedUser())
},[])
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
        <div
          className={`flex justify-evenly items-center gap-1 rounded-buttonRadius bg-inputBackground p-quantitySm lg:p-quantityLg flex-1`}
        >
          <FaPlus className="cursor-pointer" />
          <span>1</span>
          <FaMinus className="cursor-pointer" />
        </div>
        <Button className="lg:w-[400px] md:w-[200px] w-[236px]" click={()=> dispatch(AddToCart(product.quantity, product._id, user._d))} >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
