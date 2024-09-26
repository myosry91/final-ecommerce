import React from 'react';
import img1 from "../../../assets/images/Frame 61.png";
import img2 from "../../../assets/images/Frame 62.png";
import img3 from "../../../assets/images/Frame 63.png";
import img4 from "../../../assets/images/Frame 64.png";

const Category = () => {
  const styles = [
    { name: 'Casual', image: `${img1}`, link: '#' },
    { name: 'Formal', image: `${img2}`, link: '#' },
    { name: 'Party', image: `${img4}`, link: '#' },
    { name: 'Gym', image: `${img3}`, link: '#' },
  ];

  return (
    <div className="bg-cardBackground p-8 mx-auto rounded-xl shadow-lg max-w-6xl my-20 ">
      <h2 className="text-center text-3xl font-bold font-cairo mb-10">BROWSE BY dress STYLE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 mx-auto ">
        {styles.slice(0, 2).map((style, index) => (
          <div
            key={style.name}
            className={`relative cursor-pointer overflow-hidden rounded-lg shadow-md bg-white 
            ${index === 0 ? 'sm:col-span-1' : 'sm:col-span-2'} col-span-1 flex flex-col`}
            onClick={() => window.location.href = style.link}
          >
            <img
              src={style.image}
              alt={style.name}
              className="w-full h-full object-cover rounded-t-md group-hover:scale-105 transition-transform duration-300 "
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            </div>
          </div>
        ))}

        {styles.slice(2, 4).map((style, index) => (
          <div
            key={style.name}
            className={`relative cursor-pointer overflow-hidden rounded-lg shadow-md bg-white 
            ${index === 0 ? 'sm:col-span-2' : 'sm:col-span-1'} col-span-1 flex flex-col`}
            onClick={() => window.location.href = style.link}
          >
            <img
              src={style.image}
              alt={style.name}
              className="w-full h-full object-cover rounded-t-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
