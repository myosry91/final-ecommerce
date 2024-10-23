import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../../../redux/RTK/categoriesApi";

const Category = () => {
  const dispatch = useDispatch();
  const { data: categories } = useGetCategoriesQuery()

  return (
    <div className="w-full bg-cardBackground p-8 mx-auto rounded-xl shadow-lg max-w-6xl my-20 ">
      <h2 className="text-center text-3xl font-bold font-cairo mb-10">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full ">
        {categories?.slice(0, 2).map((category) => (
          <Link to={`category/${category.id}`} key={category._id}>
              <img className="object-contain sm:w-[100vw] lg:w-full" src={category.image} alt={category.name} />   
          </Link>
        ))}
      </div>
      <div className="flex gap-2 mt-2 flex-wrap lg:flex-nowrap w-full">
        {categories?.slice(2, 4).map((category) => (
          <Link to={`category/${category.id}`} key={category.id} >
              <img src={category.image} alt={category.name} className="sm:w-[100vw] lg:w-full" />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Category;
