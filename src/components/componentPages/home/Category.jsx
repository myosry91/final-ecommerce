import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/features/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="w-full bg-cardBackground p-8 mx-auto rounded-xl shadow-lg max-w-6xl my-20 ">
      <h2 className="text-center text-3xl font-bold font-cairo mb-10">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="flex flex-col justify-center items-center lg:grid grid-cols-1 lg:grid-cols-2 gap-6 ml-14 mx-auto ">
        {categories.map((category) => (
          <Link to={`category/${category.id}`} key={category._id}>
            <div className="relative h-full w-[500px] lg:w-[450px]">
              <img
                src={category.image}
                alt={category.name}
                className=" object-contain h-full rounded-t-md w-[500px] lg:w-[450px]"
              />{" "}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Category;
