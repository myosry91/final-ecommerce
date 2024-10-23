import React from 'react'
import {ThreeDots} from "react-loader-spinner"
const LoaderSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <ThreeDots
                visible={true}
                height="40"
                width="40"
                color="#00000"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default LoaderSpinner
