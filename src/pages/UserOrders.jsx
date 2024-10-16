import React, { useState } from 'react'
import CurrentPath from '../components/ui/CurrentPath'
import Title from '../components/ui/Title'
import Order from '../components/componentPages/userOrders/Order'
import OrderSummary from '../components/componentPages/cart/OrderSummary'
import tshirt from "../assets/images/tshirt.png"
import DashboardSidebar from "../components/componentPages/dashboard/DashboardSidebar"

const UserOrders = () => {
    const [status, setStatus] = useState("Pending")
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Gradient Graphic T-shirt',
            size: 'Large',
            color: 'White',
            price: 145,
            quantity: 1,
            imageUrl: tshirt,
        },
        {
            id: 2,
            name: 'Checkered Shirt',
            size: 'Medium',
            color: 'Red',
            price: 180,
            quantity: 1,
            imageUrl: tshirt,
        },
        {
            id: 3,
            name: 'Skinny Fit Jeans',
            size: 'Large',
            color: 'Blue',
            price: 240,
            quantity: 1,
            imageUrl: tshirt,
        },
    ]);
    return (
        <section className='mb-28'>
            <div className="container font-inter">
                <nav>
                    <CurrentPath currentPath={["orders", "orderId"]} />
                </nav>
                <div className="grid lg:grid-cols-[295px,.9fr] grid-cols-1 gap-3 ">
                    {/* Dashboard component */}
                    <div></div>
                    <div>
                        <div className="flex justify-between flex-row items-center">
                            <h2 className='font-cairo font-bold'>Your Orders</h2>
                            <div className=' py-2 px-6 bg-slate-200 rounded-buttonRadius' >
                                <span className={`inline-block mx-2 w-3 h-3 rounded-full ${status === "Pending" ? 'bg-yellow-500' : 'bg-green-600'}`} />
                                {status}
                            </div>
                        </div>
                        <div className=' border border-slate-300 rounded p-2 my-8'>
                            <Order />
                            <hr className='border border-slate-200 my-3' />
                            <Order />
                        </div>
                        <div className='flex gap-5 flex-wrap lg:flex-nowrap md:flex-nowrap justify-center'>
                            <OrderSummary showButton={false} cartItems={cartItems} />
                            <div className='border border-slate-200 rounded p-2 w-full  ' >
                                <h2 className='' >Order Address</h2>
                                <textarea name="address" id="orderAddress" className=' w-full  border-none rounded placeholder:text-center placeholder:text-xs mt-3' placeholder='Address Details...' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserOrders
