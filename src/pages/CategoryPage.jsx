import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryMutation } from "../redux/RTK/categoriesApi";

function CategoryPage() {
  const {id} = useParams();
  const [setCategory, { data: category }] = useGetCategoryMutation();

  useEffect(() => {
    setCategory(id)
  },[id])

  return (
    <div className="flex flex-col space-y-10 justify-center items-center w-full">
      <h1 className="mt-10 text-[28px] font-semibold">{category?.name}</h1>
      <div>
        <img src={category?.image} className="lg:w-[500px]" />
      </div>
      <p className="max-w-[800px] mx-auto px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        ratione quis ex eius corrupti minima aliquid, sed aut natus odit iusto
        eos laboriosam fuga nihil officia veniam dolore voluptatum quia!
      </p>
      <div className="lg:h-5" />
    </div>
  );
}

export default CategoryPage;
