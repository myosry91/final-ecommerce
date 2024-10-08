import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSize, clearSelectedSize } from "../../redux/features/productsSlice";

const MainSize = ({ sizes, className }) => {
  const dispatch = useDispatch();
  const selectedSize = useSelector((state) => state.products.selectedSize);

  const handleSizeClick = (size) => {
    if (size === selectedSize) {
      // If the selected size is clicked again, clear the selection
      dispatch(clearSelectedSize());
    } else {
      // Otherwise, set the new size
      dispatch(setSelectedSize(size));
    }
  };

  return (
    <div className="flex gap-1 flex-wrap cursor-pointer">
      {sizes.map((size, index) => (
        <div
          key={index}
          className={`${className} ${selectedSize === size ? "bg-black text-white" : "bg-inputBackground  "
            } rounded-buttonRadius p-sizeSm lg:p-sizeLg`}
          onClick={() => handleSizeClick(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
};

export default MainSize;
