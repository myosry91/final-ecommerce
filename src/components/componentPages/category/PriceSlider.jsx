import React, { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Slider } from '@mui/material'
import AccordionUI from '../../ui/AccordionUI'
import { useDispatch, useSelector } from 'react-redux'
import { clearSelectedPriceRange, setSelectedPriceRange } from '../../../redux/features/productsSlice'

function value(price) {
    return `${price}$`
}
const PriceSlider = () => {
    const [price, setPrice] = useState([20, 50]);

    const dispatch = useDispatch();
    const selectedPrice = useSelector((state) => state.products.selectedPriceRange);

    const handleChangeOnPrice = (event, price) => {
        if (price === selectedPrice) {
            // If the selected size is clicked again, clear the selection
            dispatch(clearSelectedPriceRange());
        } else {
            // Otherwise, set the new size
            dispatch(setSelectedPriceRange(price));
            setPrice(price);
        }
    }

    return (
        <AccordionUI title={'Price'} >
            <Slider
                value={price}
                onChange={handleChangeOnPrice}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={value}
                min={0}
                max={500}
            />
        </AccordionUI>
    )
}

export default PriceSlider
