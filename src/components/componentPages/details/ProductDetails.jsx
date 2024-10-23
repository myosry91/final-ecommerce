import React, { useState } from "react";
import MainQuantity from "../../ui/MainQuantity";
import Button from "../../ui/Button";
import MainSize from "../../ui/MainSize";
import MainReviews from "../../ui/MainReviews";
import Color from "../../ui/Color";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useGetUserQuery } from "../../../redux/RTK/loginApi";
import { useAddToCartMutation } from "../../../redux/RTK/cartApi";
import { ToastError, ToastSuccess } from "../../ui/Toast";
import { useGetOrdersQuery } from "../../../redux/RTK/adminDashboardApi";

const ProductDetails = ({ product }) => {
  const { data:user } = useGetUserQuery()
  const [count, setCount] = useState(1);
  const isUserExist = !!localStorage.getItem("role")
  const [addToCart] = useAddToCartMutation()
  const {refetch} = useGetOrdersQuery()

  async function handleAddToCart() {
    const quantity = Number(count)
    try {
      await addToCart({ count: quantity, productId: product?._id, userId: "670e2e1d58277efbe52cabd1" }).unwrap()
      if (!isUserExist) {
        ToastError("You Must Login Before Add To Your Cart") 
      } else { 
        ToastSuccess("Order has been added ")
        refetch()
      }
    } catch (error) {
      console.log(error?.errors[0].msg)
    }
  }

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="font-cairo font-bold">{product?.title}</h3>
      {/* product reviews */}
      <div>
        <MainReviews rate={product?.ratingsAverage} />
      </div>
      {/* product price */}
      <div className="flex gap-2 items-center">
        <h4> {product?.priceAfterDiscount} </h4>
        <h4 className="text-gray-400 line-through"> {product?.price} </h4>
        <p className="bg-discountBackground text-discountColor  lg:p-discountLg rounded-buttonRadius p-discountSm">
          -40%
        </p>
      </div>
      <p className="text-descriptionColor">{product?.description}</p>
      <hr className="text-descriptionColor" />
      {/* product colors */}
      <div>
        <p className="text-descriptionColor mb-4">select colors</p>
        <Color colors={product?.colors} />
      </div>
      <hr className="text-descriptionColor" />
      {/* product sizes */}
      <div>
        <p className="mb-4 text-descriptionColor">choose sizes</p>
        <MainSize
          sizes={[product?.size]}
          className={`rounded-buttonRadius p-sizeSm lg:p-sizeLg `}
        />
      </div>
      {/* product quantity */}
      <div className="flex gap-3 my-6">
        <div
          className={`flex justify-evenly items-center gap-1 rounded-buttonRadius bg-inputBackground p-quantitySm lg:p-quantityLg flex-1`}
        >
          <button
            onClick={() => setCount((pre) => pre + 1)}
          >
            <FaPlus className="cursor-pointer" />
          </button>

          <span>{count}</span>
          <button onClick={() => count !== 1 && setCount((pre) => pre - 1)}>
            <FaMinus className="cursor-pointer" />
          </button>
        </div>
        <Button
          className="lg:w-[400px] md:w-[200px] w-[236px]"
          click={() => handleAddToCart((Number(count), product?._id))}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
