import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from '../components/componentPages/cart/CartItems';
import OrderSummary from '../components/componentPages/cart/OrderSummary';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";

const CartPage = () => {
  // جلب العناصر من حالة Redux بدلاً من استخدام useState
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="container pb-20">
      <nav className="mb-5 flex mt-4 space-x-4 items-center">
        <Link to="/" className="text-gray-500 ">Home</Link>
        <AiFillCaretRight className='flex' />
        <span className='text-black'>Cart</span>
      </nav>
      <div>
        <h2 className="text-3xl font-bold mb-4">Your cart</h2>
        <div className="flex flex-col lg:flex-row md:flex-col xl:flex-row gap-5 justify-between items-start">
          <CartItems cartItems={cartItems} />
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
