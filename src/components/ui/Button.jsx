const Button = ({ children,width }) => {
  return (
    <button className={`p-buttonPadding bg-buttonBackground text-white rounded-buttonRadius  mt-5 font-inter`} style={{width:width}}>
      {children}
    </button>
  );
};

export default Button;
