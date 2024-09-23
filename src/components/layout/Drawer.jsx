import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
function Drawer({ onClose }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClose = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  return (
    <div className="absolute top-0 left-0 w-72 bg-white py-3 px-5 h-full z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-bold font-cairo px-2">Shop.Co</h1>
        <IoMdClose
          className="text-[22px] cursor-pointer"
          onClick={handleClose}
        />
      </div>

      <ul className="showDropDown font-inter flex flex-col gap-2 mt-10 ">
        <li onClick={handleDropdown}>
          <a href="#" className="block border-b border-headerBackground">
            <span className="flex justify-between hover:bg-headerBackground p-2 duration-300">
              On Sale
              <RiArrowDropDownLine className="text-[25px] mt-1 cursor-pointer" />
            </span>
            <ul
              className={
                showDropdown
                  ? "flex flex-col pb-5 max-h-fit transition-max-height duration-300"
                  : "overflow-hidden max-h-0"
              }
            >
              <li>
                <a
                  href="#"
                  className="block hover:bg-headerBackground duration-300 py-2 px-4 border-b border-headerBackground"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:bg-headerBackground duration-300 py-2 px-4 border-b border-headerBackground"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:bg-headerBackground duration-300 py-2 px-4 border-b border-headerBackground"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:bg-headerBackground duration-300 py-2 px-4"
                >
                  New Arrivals
                </a>
              </li>
            </ul>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block hover:bg-headerBackground duration-300 p-2 border-b border-headerBackground"
          >
            On Sale
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block hover:bg-headerBackground duration-300 p-2 border-b border-headerBackground"
          >
            New Arrivals
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block hover:bg-headerBackground duration-300 p-2"
          >
            Brands
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Drawer;
