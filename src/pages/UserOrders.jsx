import React, { useState } from 'react'
import CurrentPath from '../components/ui/CurrentPath'
import Title from '../components/ui/Title'
import Order from '../components/componentPages/userOrders/Order'
import OrderSummary from '../components/componentPages/cart/OrderSummary'
import tshirt from "../assets/images/tshirt.png"
import DashboardSidebar from "../components/componentPages/dashboard/DashboardSidebar"
import { useGetOrdersQuery } from '../redux/RTK/adminDashboardApi'
import { MdArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import LoaderSpinner from '../components/ui/LoaderSpinner'

const UserOrders = () => {
    const [status, setStatus] = useState("Pending")
    const navigate = useNavigate()


    const { data: orders, isLoading } = useGetOrdersQuery({ page: 1, limit: 100 }, {
        refetchOnFocus: true
    })

    return (
        <div className="container font-inter mb-32">
            <nav>
                <CurrentPath currentPath={["orders"]} />
            </nav>
            <div className="grid lg:grid-cols-[295px,.9fr] md:grid-cols-[295px,.9fr] sm:grid-cols-1 gap-5 ">
                <DashboardSidebar />
                <div>
                    <div className="flex justify-between flex-row items-center">
                        <h2 className='font-cairo font-bold'>Your Orders</h2>
                        <div className=' py-2 px-6 bg-slate-200  dark:text-black rounded-buttonRadius' >
                            <span className={`inline-block mx-2 w-3 h-3 rounded-full ${status === "Pending" ? 'bg-yellow-500' : 'bg-green-600'}`} />
                            Pending
                        </div>
                    </div>
                    {orders?.length === 0 ?
                        <div> It looks like you haven't placed any orders yet. <button onClick={() => navigate("/")} >  Start exploring our collection <MdArrowRight size={30} className='inline' /></button> </div> : (
                            isLoading ? <LoaderSpinner />
                                : (
                                    <div className=' border border-slate-300/50 rounded p-2 my-10'>
                                        <Order orders={orders} />
                                    </div>
                                )
                        )}
                    <div className='flex gap-5 flex-wrap lg:flex-nowrap md:flex-wrap justify-center'>
                        <OrderSummary showButton={false} updatedOrder={orders} />
                        <div className='border border-slate-300/50 rounded p-2 w-full  ' >
                            <h2>Order Address</h2>
                            <textarea name="address" id="orderAddress" className=' w-full  border-none rounded placeholder:text-center placeholder:text-xs mt-3 text-black' placeholder='Address Details...' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserOrders
