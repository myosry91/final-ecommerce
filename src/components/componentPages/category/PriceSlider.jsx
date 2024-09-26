import React, { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Slider } from '@mui/material'
import AccordionUI from '../../ui/AccordionUI'

function value(price) {
    return `${price}$`
}
const PriceSlider = () => {
    const [price, setPrice] = useState([20, 50])
    const handleChange = (event, newPrice) => {
        setPrice(newPrice);
    }

    return (
        <AccordionUI title={'Price'} >
            <Slider
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={value}
            />
        </AccordionUI>
    )
}

export default PriceSlider
