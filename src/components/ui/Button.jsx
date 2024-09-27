const Button = ({ children, width, className }) => {
  return (
    <button
      className={`p-buttonPadding bg-buttonBackground border-[2px] border-buttonBackground hover:bg-transparent hover:text-inherit hover:border-[2px] hover:border-gray-300  text-white rounded-buttonRadius duration-200 font-inter ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
