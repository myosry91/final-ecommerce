import React from 'react'
import tshirt from "../../../assets/images/tshirt.png"
import { useGetOrdersQuery } from '../../../redux/RTK/adminDashboardApi'

const Order = ({orders}) => {
   

    return (
        <>
            {orders?.map(order => {
                const { imgCover, title, colors, price } = order.orderItems[0].product;
                return (
                    <div className='flex gap-2 my-4' key={order.id}>
                        <img src={imgCover} alt="order" className='w-24' />
                        <div className='flex flex-col justify-between w-full font-inter leading-none'>
                            <div className='flex flex-col'>
                                <p className='font-inter text-xs lg:text-base' >{title}</p>
                                <span>
                                    <small >Size: <p className='text-descriptionColor inline' >{order.orderItems[0].size}</p> </small>
                                </span>
                                <span>
                                    <small> Color: <p className='text-descriptionColor inline'>{[colors].join(",")}</p></small>
                                </span>
                            </div>
                            <div className='flex justify-between items-center align-bottom' >
                                <p className='text-bold text-sm lg:text-lg  ' >{price}$</p>
                                <span className='py-2 px-6 bg-inputBackground rounded-buttonRadius dark:text-black'> {order.orderItems[0].quantity} piece</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Order
