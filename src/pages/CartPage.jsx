import React, { useState } from 'react';
import CartItems from '../components/componentPages/cart/CartItems';
import OrderSummary from '../components/componentPages/cart/OrderSummary';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import image1 from "../assets/images/product(1).png";
import image2 from "../assets/images/product(2).png";
import image3 from "../assets/images/product(3).png";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
      quantity: 1,
      imageUrl: `${image1}`,
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 180,
      quantity: 1,
      imageUrl: `${image2}`,
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      size: 'Large',
      color: 'Blue',
      price: 240,
      quantity: 1,
      imageUrl: `${image3}`,
    },
  ]);

  return (

    <div className="container mx-auto mt-10">
      <nav className="mb-5 flex mt-4 space-x-4 items-center">
        <Link to="/" className="text-gray-500 ">Home</Link>
        <AiFillCaretRight className='flex'/>
        <span className='text-black'>Cart</span>
      </nav>
      <div className="flex flex-col lg:flex-row gap-10">
        <CartItems cartItems={cartItems} setCartItems={setCartItems} />
        <OrderSummary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
