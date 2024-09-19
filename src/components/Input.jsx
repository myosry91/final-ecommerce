const Input = ({ type, label }) => {
  return (
    <div>
      {/* start job */}
      <label htmlFor="">{label}</label>
      <input type={type} />
    </div>
  );
};

export default Input;
