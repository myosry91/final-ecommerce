import Card from "../../ui/Card";
import ImageOne from "../../../assets/images/image-7.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import useWindowWidth from "../../../customHooks/useWindowWidth";
import FilterImage from "../../../assets/images/filter.png"

function CategoryProducts() {
  const pageNums = [];
  for (let i = 1; i <= 10; i++) {
    pageNums.push(i);
  }

  let cards = [
    {
      id: 1,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$1",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 2,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$1",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 3,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$1",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 4,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$1",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 5,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$2",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 6,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$2",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 7,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$2",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 8,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$2",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 9,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$3",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 10,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$3",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 11,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$3",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 12,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$3",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 13,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$4",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 14,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$4",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 15,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$4",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 16,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$4",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 17,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$5",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 18,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$5",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 19,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$5",
      oldPrice: "$260",
      discount: "$20",
    },
    {
      id: 20,
      cardTitle: "T-SHIRT WITH TAPE DETAILS",
      cardImage: `${ImageOne}`,
      cardAlt: "Image One Alt",
      cardPrice: "$5",
      oldPrice: "$260",
      discount: "$20",
    },
  ];

  const [activePageNumber, setActivePageNumber] = useState(1);
  const [numOfPage, setNumOfPage] = useState([0, 4]);


  useEffect(() => {
    if (activePageNumber === 1) {
      let result = [0, 4];
      setNumOfPage(result);
    }
    else {
      const end = (activePageNumber + activePageNumber) * 2;
      const start = end - 4;
      let result = [start, end];
      setNumOfPage(result);
    }

  }, [activePageNumber]);


  const windowWidth = useWindowWidth();

  function handleFilterOpen() {
    console.log("Ahmed Elbalouty");
  }

  return (
    <div className="lg:mb-12">
      <div className="flex items-center justify-between mb-3 px-2 gap-6">
        <h2 className="lg:text-[32px] text-[24px] font-bold">Casual</h2>
        <p className="text-placeholderColor">Showing 1-10 of 100 Products sort by: Most Popular</p>
        <img src={FilterImage} alt="" className={"cursor-pointer md:hidden"} onClick={handleFilterOpen} width="32" height="32" />
      </div>
      <div>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-5 gap-y-10">
          {
            cards.slice(numOfPage[0], numOfPage[1]).map((card) => (
              <Card key={card.id} imageSrc={card.cardImage} imageAlt={card.cardAlt} cardTitle={card.cardTitle} cardPrice={card.cardPrice} discount={card.discount} oldPrice={card.oldPrice} />
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
          !(activePageNumber === 10) && setActivePageNumber(activePageNumber + 1);
        }}>{windowWidth > 768 && <span className="mr-2">Next</span>}<span>{<FaArrowRight />}</span></button>
      </div>
    </div>
  )
}

export default CategoryProducts;
