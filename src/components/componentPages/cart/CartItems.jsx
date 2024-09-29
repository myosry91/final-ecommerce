import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { CgMathPlus, CgMathMinus } from 'react-icons/cg';

const CartItems = ({ cartItems, setCartItems }) => {
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Your cart</h2>

      <div className="w-full md:w-[715px] bg-white p-5 rounded-lg shadow-md overflow-auto border-2 mb-20">
       {cartItems.length===0 ? <div className=' flex justify-center items-center font-bold text-2xl'> <p>Your cart is empty</p></div> : 
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            
            <div
              key={item.id}
              className={`flex justify-between items-start ${
                index === cartItems.length - 1 ? 'pb-0' : 'border-b pb-5'
              }`}
            >
              <img src={item.imageUrl} alt={item.name} className="h-[120px] w-[90px]" />
              
              <div className="flex-1 px-4">
                <div className="flex flex-col justify-between">
                  <p className="font-bold sm:text-base sm:w-[191px] lg:w-[239px]">{item.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <p className="text-black font-bold mt-5">${item.price}</p>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between space-y-12">
                <button onClick={() => removeItem(item.id)} className="text-red-500 border-none ">
                  <FaTrash className='' size={20} />
                </button>

                <div className="flex items-center p-1 rounded-3xl bg-gray-200">
                  <span onClick={() => decreaseQuantity(item.id)} className="text-gray-500 mx-2">
                    <CgMathMinus />
                  </span>
                  <p className="mx-4">{item.quantity}</p>
                  <span onClick={() => increaseQuantity(item.id)} className="text-gray-500 mx-2">
                    <CgMathPlus />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default CartItems;
