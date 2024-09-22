import ImageOne from "../../assets/images/image-7.png"
import Card from "./Card"
import { useState } from 'react';
import useWindowWidth from "../../customHooks/useWindowWidth";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Cards() {
  let cards = [
    { id: 1, cardTitle: 'T-SHIRT WITH TAPE DETAILS', cardImage: `${ImageOne}`, cardAlt: "Image One Alt", cardPrice: "$120" },
    { id: 2, cardTitle: 'T-SHIRT WITH TAPE DETAILS', cardImage: `${ImageOne}`, cardAlt: "Image One Alt", cardPrice: "$120" },
    { id: 3, cardTitle: 'T-SHIRT WITH TAPE DETAILS', cardImage: `${ImageOne}`, cardAlt: "Image One Alt", cardPrice: "$120" },
    { id: 4, cardTitle: 'T-SHIRT WITH TAPE DETAILS', cardImage: `${ImageOne}`, cardAlt: "Image One Alt", cardPrice: "$120" },
    { id: 5, cardTitle: 'T-SHIRT WITH TAPE DETAILS', cardImage: `${ImageOne}`, cardAlt: "Image One Alt", cardPrice: "$120" },
    { id: 6, cardTitle: 'T-SHIRT WITH TAPE DETAILS', cardImage: `${ImageOne}`, cardAlt: "Image One Alt", cardPrice: "$120" },
    { id: 7, cardTitle: 'T-SHIRT WITH TAPE DETAILS', cardImage: `${ImageOne}`, cardAlt: "Image One Alt", cardPrice: "$120" },
  ]

  const [viewAll, setViewAll] = useState(false);
  const windowWidth = useWindowWidth();

  const handleViewAll = () => {
    setViewAll(true)
  }

  const handleShowLess = () => {
    setViewAll(false)
  }

  return (
    <>
      {
        windowWidth > 768 ?
          <div className='cards grid grid-cols-auto-fill gap-x-5 gap-y-10 justify-self-center'>
            {
              cards.length > 4 && !viewAll ? cards.slice(0, 4).map(card => (
                <div key={card.id} className='card'>
                  <Card imageSrc={card.cardImage} imageAlt={card.cardAlt} cardTitle={card.cardTitle} cardPrice={card.cardPrice} />
                </div>
              )) : cards.map(card => (
                <div key={card.id} className='card'>
                  <Card imageSrc={card.cardImage} imageAlt={card.cardAlt} cardTitle={card.cardTitle} cardPrice={card.cardPrice} />
                </div>
              ))
            }
          </div>
          :
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper" spaceBetween={10} loop={true} breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
          }}>
            {
              cards.map(card => (
                <SwiperSlide key={card.id}>
                  <Card imageSrc={card.cardImage} imageAlt={card.cardAlt} cardTitle={card.cardTitle} cardPrice={card.cardPrice} />
                </SwiperSlide>
              ))
            }
          </Swiper>
      }
      {
        windowWidth > 768 && (cards.length > 4 && !viewAll) && <div className="flex justify-center pb-3 pt-10"><button className="bg-white p-buttonPadding border border-solid border-whiteBtnBorderColor rounded-buttonRadius" onClick={handleViewAll}>View All</button></div>
      }
      {
        windowWidth > 768 && (cards.length > 4 && viewAll) && <div className="flex justify-center pb-3 pt-10"><button className="bg-white p-buttonPadding border border-solid border-whiteBtnBorderColor rounded-buttonRadius" onClick={handleShowLess}>Show Less</button></div>
      }
    </>
  )
}

export default Cards
