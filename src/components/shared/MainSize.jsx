import React,{useState} from 'react'

const MainSize = ({ sizes, className }) => {
    const [selectSize, setSelectSize] = useState(null)
    return (
        <div className='flex gap-1'>
            {sizes.map((size, index) => (
                <div key={index} className={`${className} ${selectSize === size ? "bg-black text-white" : "bg-inputBackground"}`} onClick={()=> setSelectSize(size)} >{size}</div>
            ))}
        </div>
    )
}

export default MainSize
