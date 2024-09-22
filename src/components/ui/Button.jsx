const Button = ({ children, width }) => {
console.log(typeof width)
  return (
    <button className={`p-buttonPadding bg-buttonBackground text-white rounded-buttonRadius  mt-5 font-inter w-full lg:w-[${String(width)}px]`} >
      {children}
    </button>
  );
};

export default Button;
