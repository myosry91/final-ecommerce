import Card from "../../ui/Card";
import ImageOne from "../../../assets/images/image-7.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import useWindowWidth from "../../../customHooks/useWindowWidth";
import FilterImage from "../../../assets/images/filter.png"
import { getProducts, setSelectedSize, selectProducts } from "../../../redux/features/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";

function CategoryProducts({ category }) {
  console.log(category)

  const [activePageNumber, setActivePageNumber] = useState(1);
  const [numOfPage, setNumOfPage] = useState([0, 4]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  // Handle click outside to close filter
  const handleClickOutside = (e) => {
    if (filterRef.current && !filterRef.current.contains(e.target)) {
      setIsFilterOpen(false);
    }
  };

  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state?.products);
  console.log(products?.data);

  useEffect(() => {
    if (activePageNumber === 1) {
      let result = [0, 4];
      setNumOfPage(result);
      dispatch(getProducts(products));
    }
    else {
      const end = (activePageNumber + activePageNumber) * 2;
      const start = end - 4;
      let result = [start, end];
      setNumOfPage(result);
    }

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };

  }, [activePageNumber, dispatch, isFilterOpen]);


  const windowWidth = useWindowWidth();


  const numOfPages = Math.ceil(products?.total / products?.limit) + 1;
  console.log(numOfPages);

  const pageNums = [];
  for (let i = 1; i <= numOfPages; i++) {
    pageNums.push(i);
  }

  function handleFilterOpen() {
    setIsFilterOpen(!isFilterOpen);
  }

  return (
    <>
      <div className="my-5 grid lg:grid-cols-[275px,1fr] md:grid-cols-[275px,1fr] grid-cols-1 gap-5 realtive">
        <Filter className='lg:block md:block hidden' />
        {
          isFilterOpen &&
          <div className="fixed top-0 left-0 w-full bg-black/50 z-40 flex items-center justify-center">
            <div ref={filterRef} className="w-[80%] max-w-[350px] relative top-5">
              <Filter isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} className={"bg-white"} />
            </div>
          </div>
        }
        <div className="lg:mb-12">
          <div className="flex items-center justify-between mb-3 px-2 gap-6">
            <h2 className="lg:text-[32px] text-[24px] font-bold">Casual</h2>
            {/* <p className="text-placeholderColor">Showing 1-10 of 100 Products sort by: Most Popular</p> */}
            <img src={FilterImage} alt="filter-icon" className={"cursor-pointer md:hidden"} onClick={handleFilterOpen} width="32" height="32" />
          </div>
          <div>
            <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-5 gap-y-10">
              {
                products?.data?.slice(numOfPage[0], numOfPage[1]).map((card) => (
                  <Card key={card.id} imageSrc={card.imgCover} imageAlt={card.title} cardTitle={card.title} cardPrice={card.priceAfterDiscount} discount={"$20"} oldPrice={card.price} />
                ))
              }
            </div>
          </div>
          <hr className="border border-b-[1px] mt-10" />
          <div className="pagenation-btns flex justify-between my-5 items-center gap-2">
            <button className="rounded-[8px] text-[14px] border border-whiteBtnBorderColor py-[8px] px-[14px] flex items-center" onClick={() => {
              !(activePageNumber === 1) && setActivePageNumber(activePageNumber - 1)
            }}><span><FaArrowLeft /></span>{windowWidth > 768 && <span className="ml-2">Previous</span>}</button>
            <div className="pages-nums flex items-center flex-wrap justify-center">
              {pageNums.map((pageNum) => {
                return (
                  <button key={pageNum} className={`rounded-[8px] text-[14px] px-3 py-2 ${activePageNumber === pageNum && "bg-inputBackground"}`} onClick={() => {
                    setActivePageNumber(pageNum);
                  }}>{pageNum}</button>
                )
              })}
            </div>
            <button className="rounded-[8px] text-[14px] border border-whiteBtnBorderColor py-[8px] px-[14px] flex items-center" onClick={() => {
              !(activePageNumber === numOfPages) && setActivePageNumber(activePageNumber + 1);
            }}>{windowWidth > 768 && <span className="mr-2">Next</span>}<span>{<FaArrowRight />}</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryProducts;
