const Button = ({ children, width, className }) => {
  return (
    <button
      className={`p-buttonPadding bg-buttonBackground text-white rounded-buttonRadius font-inter ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
