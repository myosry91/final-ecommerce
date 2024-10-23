import Card from "../../ui/Card";
import { useState } from "react";
import useWindowWidth from "../../../customHooks/useWindowWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/RTK/productsApi";

function Cards() {

  const { data: products, isLoading } = useGetProductsQuery()
  const [viewAll, setViewAll] = useState(false);
  const windowWidth = useWindowWidth();
  const newProducts = products?.filter(product => new Date(product.updatedAt).getMonth() - 1 >= new Date(product.createdAt).getMonth() <= new Date(product.createdAt).getMonth() + 1)

  const handleViewAll = () => {
    setViewAll(true);
  };

  const handleShowLess = () => {
    setViewAll(false);
  };

  return (
    <>
      {isLoading && windowWidth > 768 ? (
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-5 gap-y-10 justify-center">
          {newProducts?.length > 4 && !viewAll
            ? newProducts?.slice(0, 4).map((card) => (
              <div key={card.id} className="card">
                <Link to={`/products/${card._id}`}>
                  <Card
                    imageSrc={card.imgCover}
                    imageAlt={card.title}
                    cardTitle={card.title}
                    price={card.price}
                    priceAfterDiscount={card.priceAfterDiscount}

                    rate={card.ratingsAverage}
                  />
                </Link>
              </div>
            ))
            : newProducts?.map((card) => (
              <div key={card.id} className="card">
                <Link to={`/products/${card._id}`}>
                  <Card
                    imageSrc={card.imgCover}
                    imageAlt={card.name}
                    cardTitle={card.title}
                    price={card.price}
                    priceAfterDiscount={card.priceAfterDiscount}
                    rate={card.ratingsAverage}

                  />
                </Link>
              </div>
            ))}
        </div>
      ) : (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={10}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
          }}
        >
          {products?.map((card) => (
            <SwiperSlide key={card.id}>
              <Link to={`/products/${card._id}`}>
                <Card
                  imageSrc={card.imgCover}
                  imageAlt={card.name}
                  cardTitle={card.title}
                  price={card.price}
                  priceAfterDiscount={card.priceAfterDiscount}
                  rate={card.ratingsAverage}

                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {windowWidth > 768 && newProducts?.length > 4 && !viewAll && (
        <div className="flex justify-center pb-3 pt-10">
          <button
            className="bg-white p-buttonPadding border border-solid border-whiteBtnBorderColor rounded-buttonRadius"
            onClick={handleViewAll}
          >
            View All
          </button>
        </div>
      )}
      {windowWidth > 768 && newProducts?.length > 4 && viewAll && (
        <div className="flex justify-center pb-3 pt-10">
          <button
            className="bg-white p-buttonPadding border border-solid border-whiteBtnBorderColor rounded-buttonRadius"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        </div>
      )}
    </>
  );
}

export default Cards;
