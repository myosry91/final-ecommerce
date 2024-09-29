import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const OrderSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; 
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="w-full max-w-lg p-5  rounded-lg shadow-md border-2">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">Order Summary</h2>

      <div className="mb-4 flex justify-between text-sm sm:text-lg font-inter font-bold">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="mb-4 flex justify-between text-sm sm:text-lg font-inter font-bold">
        <span>Discount (-20%)</span>
        <span className='text-red-500'>-${discount.toFixed(2)}</span>
      </div>
      <div className="mb-4 flex justify-between text-sm sm:text-lg font-inter font-bold border-b my-5">
        <span>Delivery Fee</span>
        <span>${deliveryFee}</span>
      </div>
      <div className="mb-4 flex justify-between text-sm sm:text-lg font-inter font-bold my-5">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="flex sm:hidden items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Add Promo code"
          className="border p-2 rounded-lg w-3/4 mr-2"
        />
        <button className="bg-black text-white px-4 py-2 rounded-3xl">Apply</button>
      </div>

      <button className="flex items-center justify-center px-10 py-2 bg-black text-white w-full rounded-3xl text-sm sm:text-base">
        Go to Checkout
        <BsArrowRight className='mx-2 text-lg sm:text-xl' />
      </button>
    </div>
  );
};

export default OrderSummary;
