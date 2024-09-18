
const Input = ({type,label}) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input type={type} />
    </div>
  )
}

export default Input