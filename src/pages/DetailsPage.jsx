import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdArrowRight, MdCheck } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import ReviewCard from "../components/componentPages/details/ReviewCard";
import Button from "../components/ui/Button";
import Carousel from "../components/componentPages/details/Carousel";
import MainSize from "../components/ui/MainSize";
import MainQuantity from "../components/ui/MainQuantity";
import tshirt from "../assets/images/tshirt.png";
import subTshirt from "../assets/images/subC-tshirt.png";
import MainReviews from "../components/ui/MainReviews";

const DetailsPage = ({ showReview = true }) => {
  const images = [tshirt, tshirt, subTshirt];
  const colors = ["#314F4A", "#31344F", "#4F4631"];
  const sizes = ["Small", "Medium", "Large", "XLarge"];
  const [check, setCheck] = useState(0);
  return (
    <section>
      <div className="container">
        {/* product path */}
        <div className="flex gap-3">
          {["Home", "shop", "Men"].map((link, index) => (
            <NavLink
              to="/"
              className="font-inter text-descriptionColor text-base"
              key={index}
            >
              {link} <MdArrowRight className="inline" />{" "}
            </NavLink>
          ))}
          <NavLink className="font-bold">T-Shirt</NavLink>
        </div>
        {/* product details */}
        <div className="p-3 grid md:grid-cols-2 lg:grid-col-2 grid-cols-1 gap-10">
          {/* left side */}
          <Carousel images={images} />
          {/* right side */}
          <div className="flex flex-col gap-y-3">
            <h3 className="font-cairo font-bold">One Life Graphic T-shirt</h3>
            {/* product reviews */}
            <div>{!!showReview && <MainReviews rate={2.5} />}</div>
            {/* product price */}
            <div className="flex gap-2 items-center">
              <h4> $260 </h4>
              <h4 className="text-gray-400 line-through"> $200 </h4>
              <p className="bg-discountBackground text-discountColor  lg:p-discountLg rounded-buttonRadius p-discountSm">
                -40%
              </p>
            </div>
            <p className="text-descriptionColor">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <hr className="text-descriptionColor" />
            {/* product colors */}
            <div>
              <p className="text-descriptionColor mb-4">select colors</p>
              <div className="flex gap-1">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`rounded-full  w-[37px] h-[37px] flex items-center justify-center cursor-pointer`}
                    style={{ backgroundColor: color }}
                    onClick={() => setCheck(index)}
                  >
                    {check === index && <MdCheck className="text-white" />}
                  </div>
                ))}
              </div>
            </div>
            <hr className="text-descriptionColor" />
            {/* product sizez */}
            <div>
              <p className="mb-4 text-descriptionColor">choose sizes</p>
              <MainSize
                sizes={sizes}
                className={`rounded-buttonRadius p-sizeSm lg:p-sizeLg `}
              />
            </div>
            {/* product quantity */}
            <div className="flex gap-3 my-6">
              <MainQuantity quantity={1} />
              <Button className="lg:w-[400px] md:w-[200px] w-[236px]">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* product review */}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <ReviewCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
