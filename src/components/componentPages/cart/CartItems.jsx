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
    <div className="w-full flex-1 md:w-[715px] bg-white p-5 rounded-lg shadow-md overflow-auto border-[1px] border-gray-300 ">
      {cartItems.length === 0 ? <div className=' flex justify-center items-center font-bold text-2xl'> <p>Your cart is empty</p></div> :
        <div className="space-y-4 ">
          {cartItems.map((item, index) => (
           <div
           key={item.id}
           className={`flex ${index === cartItems.length - 1 ? 'pb-0' : 'border-b pb-5'}`}
         >
              <img src={item.imageUrl} alt={item.name} className="w-[90px] rounded-xl" />

              <div className=" flex-1 pl-4 ">

                <div className=" relative flex flex-col items-baseline gap-x-3 ">
                  <button onClick={() => removeItem(item.id)} className="text-red-500 border-none">
                    <FaTrash className='absolute right-0' />
                  </button>
                  <div>
                    <p className="font-bold text-sm lg:text-lg ">{item.name}</p>
                    <p className='text-xs lg:text-sm my-2'>Size: <span className='text-descriptionColor'>{item.size}</span></p>
                    <p className='text-xs lg:text-sm '>Color: <span className='text-descriptionColor'>{item.color}</span></p>
                  </div>
                </div>
                <div className='flex justify-between items-center mt-5'>
                  <p className="text-black font-bold font-inter text-xl ">${item.price}</p>
                  <div className="flex items-center p-1 rounded-3xl bg-gray-200   ">
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

            </div>
          ))}
        </div>}
    </div>

  );
};

export default CartItems;