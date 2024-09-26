import React, { useState } from 'react'
import { MdCheck } from 'react-icons/md'

const Color = ({colors}) => {
    const [check, setCheck] = useState(0)
    return (
        <div className="flex gap-2 flex-wrap ">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={`rounded-full border border-slate-400/30 w-[37px] h-[37px] flex items-center justify-center cursor-pointer`}
                    style={{ backgroundColor: color }}
                    onClick={() => setCheck(index)}
                >
                    {check === index && <MdCheck className={` ${color === "#FFFFFF"? "text-slate-400/30":"text-white"} `} />}
                </div>
            ))}
        </div>
    )
}

export default Color
