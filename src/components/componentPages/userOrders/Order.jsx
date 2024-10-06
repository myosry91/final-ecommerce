import React from 'react'
import tshirt from "../../../assets/images/tshirt.png"

const Order = () => {
    return (
        <div className='flex gap-2'>
            <img src={tshirt} alt="order" className='w-24' />
            <div className='flex flex-col justify-between w-full font-inter leading-none'>
                <div className='flex flex-col'>
                    <p className='font-inter text-xs lg:text-base' >Gradient Graphic T-shirt</p>
                    <span>
                        <small >Size: <p className='text-descriptionColor inline' >Large</p> </small>
                    </span>
                    <span>
                        <small> Color: <p className='text-descriptionColor inline'>White</p></small>
                    </span>
                </div>
                <div className='flex justify-between items-center align-bottom' >
                    <p className='text-bold text-sm lg:text-lg  ' >20$</p>
                    <span className='py-2 px-6 bg-inputBackground rounded-buttonRadius'>3piece</span>
                </div>
            </div>
        </div>
    )
}

export default Order
