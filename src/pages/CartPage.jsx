import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItems from '../components/componentPages/cart/CartItems';
import OrderSummary from '../components/componentPages/cart/OrderSummary';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import { useCountOrdersQuery, useGetOrdersQuery } from '../redux/RTK/adminDashboardApi';

const CartPage = () => {
  const [shouldFetch, setShouldFetch] = useState(false)
  const { data: total } = useCountOrdersQuery({
    skip: false,
    refetchOnMountOrArgChange: true
  });
  const queryParams = {page: 1, limit:total?.orderCount}
  const { data: orders , isLoading, isSuccess} = useGetOrdersQuery(queryParams, {
    skip: false,
    refetchOnMountOrArgChange: true
  });

  const [updatedOrder, setUpdatedOrders] = useState(orders)

  useEffect(() => {
    setShouldFetch(true)
    setUpdatedOrders(orders)
    console.log(isSuccess)
  }, [])
  

  return (
    <div className="container pb-20">
      <nav className="mb-5 flex mt-4 space-x-4 items-center">
        <Link to="/" className="text-gray-500 ">Home</Link>
        <AiFillCaretRight className='flex' />
        <span className='text-black'>Cart</span>
      </nav>
      <div>
        <h2 className="text-3xl font-bold mb-4">Your cart</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
          <CartItems
            isLoading={isLoading}
            updatedOrder={updatedOrder}
            setUpdatedOrders={setUpdatedOrders}
            orders={orders}
          />
          <OrderSummary
             updatedOrder={updatedOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
