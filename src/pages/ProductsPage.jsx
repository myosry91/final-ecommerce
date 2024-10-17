import React, { useEffect, useState } from 'react'
import CurrentPath from '../components/ui/CurrentPath'
import AllProducts from '../components/componentPages/products/AllProducts'
import { fetchCategory } from '../redux/features/categorySlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { getProducts } from '../redux/features/productsSlice'

const ProductsPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { category } = useSelector((state) => state.categories)
    const { selectedPriceRange, selectedSize, selectedColor, products, selectedCategory } = useSelector((state) => state.products)
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = {};

    const handleFilterClick = () => {
        if (selectedSize) queryParams.size = selectedSize;
        if (selectedColor) queryParams.color = selectedColor;
        if (selectedCategory) queryParams.category = selectedCategory;
        if (selectedPriceRange !== null) {
            queryParams.minPrice = selectedPriceRange[0];
            queryParams.maxPrice = selectedPriceRange[1];
        }
        // Dispatch the getProducts action with the selected filters
        dispatch(getProducts(queryParams));

        // Update the URL with the selected filters using setSearchParams
        setSearchParams(queryParams);
        if (isFilterOpen) {
            setIsFilterOpen(false);
        } else {
            return
        }
    }

    useEffect(() => {
        dispatch(fetchCategory(id))
        dispatch(getProducts(queryParams))
    }, [])

    return (
        <section>
            <div className="container">
                <CurrentPath
                    currentPath={[category.name]} />
                <AllProducts
                    isFilterOpen={isFilterOpen}
                    setIsFilterOpen={setIsFilterOpen}
                    onFilterClick={handleFilterClick}
                    category={products} />
            </div>
        </section>
    )
}

export default ProductsPage
