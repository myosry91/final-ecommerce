import React, { useRef } from 'react'
// import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import Drag from '../../ui/Drag'
import Card from '../../ui/Card'
import tshirt from "../../../assets/images/tshirt.png"

const RelatedProducts = () => {
    const containerRef = useRef()
  return (
      <Drag containerRef={containerRef} >
          {Array.from({ length: 4 }).map((_, index) => (
              
              <Card
                  key={index} 
                  imageSrc={tshirt} 
                  cardPrice="120$" 
                  cardTitle="Polo with Tipping Details" 
                  imageAlt="tshirt" 
                  discount="15%"
                //   oldPrice="200$"
                  />
          ))}
    </Drag>
  )
}

export default RelatedProducts
