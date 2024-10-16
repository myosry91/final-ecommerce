import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { AiFillTag } from "react-icons/ai";
import Button from "../../ui/Button";

const OrderSummary = ({ cartItems, showButton = true }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="w-full max-w-lg p-5  rounded-lg shadow-md border-[1px] border-gray-300">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">Order Summary</h2>

      <div className="mb-4 flex justify-between text-base font-inter  ">
        <p className='text-descriptionColor'>Subtotal</p>
        <p className='font-bold'>${subtotal.toFixed(2)}</p>
      </div>
      <div className="mb-4 flex justify-between text-base font-inter ">
        <p className='text-descriptionColor'>Discount (-20%)</p>
        <p className='text-red-500 font-bold'>-${discount.toFixed(2)}</p>
      </div>
      <div className="mb-4 flex justify-between text-base font-inter border-b my-5">
        <p className='text-descriptionColor'>Delivery Fee</p>
        <p className='font-bold'>${deliveryFee}</p>
      </div>
      <div className="mb-4 flex justify-between text-base font-inter  my-5">
        <p>Total</p>
        <p className='text-sm lg:text-lg font-bold '>${total.toFixed(2)}</p>
      </div>

      {showButton && (
        <>
        <div className="flex sm:hidden items-center justify-between mb-4">
        <div className="relative w-3/4 px-2">
          <AiFillTag className="absolute left-6 top-1/2 transform -translate-y-1/2 scale-x-[-1]  text-gray-500" />
          <input
            type="text"
            placeholder="Add Promo code"
            className="bg-gray-200 p-2 pl-10 rounded-3xl w-full border-none"
          />
        </div>
        <button className=" bg-black text-white px-4 py-2 rounded-3xl hover:border-gray-300 hover:bg-transparent hover:text-inherit hover:border-[2px]">Apply</button>
      </div>
      <div className='text-center mt-4'>
        <Button className="flex items-center justify-center w-full">
          Go to Checkout
          <BsArrowRight className='ml-2 text-lg sm:text-xl' />
        </Button>
      </div>
        </>
      )}
    </div>
  );
};

export default OrderSummary;