import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import ReviewCard from "../components/ui/ReviewCard";
import Carousel from "../components/componentPages/details/Carousel";
import tshirt from "../assets/images/tshirt.png";
import subTshirt from "../assets/images/subC-tshirt.png";
import ProductDetails from "../components/componentPages/details/ProductDetails";
import Title from "../components/ui/Title";
import RelatedProducts from "../components/componentPages/details/RelatedProducts";
import CurrentPath from "../components/ui/CurrentPath";

const DetailsPage = ({ showReview = true }) => {
  const images = [tshirt, tshirt, subTshirt];
  const colors = ["#314F4A", "#31344F", "#4F4631"];
  const sizes = ["Small", "Medium", "Large", "XLarge"];
  const [check, setCheck] = useState(0);
  const [viewAll, setViewAll] = useState(false)

  let current = "T-shirt" // it should be taken from api
  return (
    <section>
      <div className="container">
        {/* product path */}
        <CurrentPath currentPath={["shop", "Men", current]} />
        {/* product details */}
        <div className="p-3 grid md:grid-cols-2 lg:grid-col-2 grid-cols-1 gap-10">
          {/* left side */}
          <Carousel images={images} />
          {/* right side */}
          <div>
            <ProductDetails
              colors={colors}
              sizes={sizes}
              check={check}
              setCheck={setCheck}
              showReview={showReview}
            />
          </div>
        </div>
      </div>
      {/* product review */}
      <div className="container">
        <div className="flex justify-between px-2 items-center my-3">
          <h5 className="font-bold font-inter">
            All Reviews <span className="text-descriptionColor">(451)</span>{" "}
          </h5>
          <div className="flex gap-1">
            <button className=" bg-inputBackground w-[120px] lg:p-quantityLg lg:flex hidden  items-center gap-2 font-bold rounded-[62px]">
              Latest <IoIosArrowDown />{" "}
            </button>
            <button className=" rounded-buttonRadius lg:p-quantityLg p-quantitySm bg-buttonBackground text-buttonColor">
              write a review
            </button>
          </div>
        </div>
        {/* list testmonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {viewAll ? (
            Array.from({ length: 5 }).map((_, index) => (
              <ReviewCard key={index} comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt" postDate="Posted on August 14, 2023" name="Samantha Co." />
            ))
          ) : (
            Array.from({ length: 5 }).slice(2).map((_, index) => (
              <ReviewCard key={index} comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt" postDate="Posted on August 14, 2023" name="Samantha Co." />
            ))
          )}
        </div>
        <button className="bg-white p-buttonPadding border border-solid border-whiteBtnBorderColor rounded-buttonRadius mx-auto block my-4 font-bold" onClick={() => setViewAll(!viewAll)} >{!viewAll ? "Load more reviews" : "Load less reviews"}</button>
      </div>
      {/* related products */}
      <div>
        <RelatedProducts />
      </div>
    </section>
  );
};

export default DetailsPage;
