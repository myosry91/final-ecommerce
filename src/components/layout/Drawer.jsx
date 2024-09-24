import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
function Drawer({ onClose }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-bold font-cairo px-2">Shop.Co</h1>
        <IoMdClose className="text-[22px] cursor-pointer" onClick={handleClose} />
      </div>

      <ul className="showDropDown font-inter flex flex-col gap-2 mt-10 ">
        <li onClick={handleDropdown}><a href="#" className="block border-b border-headerBackground">
          <span className="flex justify-between hover:bg-headerBackground p-2 duration-300">
            Shop
            <RiArrowDropDownLine className="text-[25px] mt-1 cursor-pointer" />
          </span>
          <ul className={showDropdown ? "flex flex-col pb-5 max-h-fit transition-max-height duration-300" : "overflow-hidden max-h-0"}>
            <li><a href="#" className="block hover:bg-headerBackground duration-300 py-2 px-4 border-b border-headerBackground">Men</a></li>
            <li><a href="#" className="block hover:bg-headerBackground duration-300 py-2 px-4 border-b border-headerBackground">Women</a></li>
            <li><a href="#" className="block hover:bg-headerBackground duration-300 py-2 px-4 border-b border-headerBackground">Kids</a></li>
            <li><a href="#" className="block hover:bg-headerBackground duration-300 py-2 px-4">Accessories</a></li>
          </ul>
        </a>
        </li>
        <li><a href="#" className="block hover:bg-headerBackground duration-300 p-2 border-b border-headerBackground">On Sale</a></li>
        <li><a href="#" className="block hover:bg-headerBackground duration-300 p-2 border-b border-headerBackground">New Arrivals</a></li>
        <li><a href="#" className="block hover:bg-headerBackground duration-300 p-2">Brands</a></li>
      </ul>
    </>
  )
}

export default Drawer
