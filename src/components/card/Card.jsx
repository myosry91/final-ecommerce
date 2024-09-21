import React from 'react'
import { BiStar, BiSolidStar } from 'react-icons/bi'

const Card = ({ image, title, price, discount, oldPrice, rating }) => {
    return (
        <div className='card'>
            <div className="card-image rounded-cardRadius bg-cardBackground">
                <img src={image} alt={title} width="200" />
            </div>
            <div className="card-content gap-y-1 flex flex-col">
                <p className='font-bold font-inter text-cardTitle '>{title}</p>
                <div className='flex gap-1 items-center '>
                    <BiSolidStar size={14} className='text-iconStarColor' />
                    <BiSolidStar size={14} className='text-iconStarColor' />
                    <BiSolidStar size={14} className='text-iconStarColor' />
                    <span className='text-cardRating'> {rating} </span>
                </div>
                <div className='product-price flex gap-1 items-center'>
                    <p className='font-bold font-inter text-cardPrice '>{price}</p>
                    <p className='text-cardOldPrice line-through '>{oldPrice}</p>
                    <span className='rounded-buttonRadius  text-discountColor bg-discountBackground '  >{ discount}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
