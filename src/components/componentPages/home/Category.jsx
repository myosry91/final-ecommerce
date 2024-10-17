import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/features/categorySlice';

const Category = () => {

  const dispatch = useDispatch()
  const { categories } = useSelector(store => store.categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <div className="bg-cardBackground p-8 mx-auto rounded-xl shadow-lg max-w-6xl my-20 ">
      <h2 className="text-center text-3xl font-bold font-cairo mb-10">BROWSE BY DRESS STYLE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 mx-auto">
        {categories.map((category) => (
          // <Link to={"/"} >
          <div
            className={`relative overflow-hidden rounded-3xl shadow-md h-full`}
          >
            <img
              src={category.image}
              alt={category.name}
              className=" w-full object-cover-full h-full rounded-t-md transition-transform duration-300 "
            />
          </div>
          // </Link>
        ))}
      </div>
    </div>
  );
};
export default Category;
