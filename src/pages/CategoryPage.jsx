import React, { useEffect, useState } from 'react'
import Filter from '../components/componentPages/category/Filter'
import CurrentPath from '../components/ui/CurrentPath'
import CategoryProducts from '../components/componentPages/category/CategoryProducts'
import { fetchCategory } from '../redux/features/CategoriesSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { getProducts } from '../redux/features/productsSlice'

const CategoryPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    // const selectedSize = useSelector((state) => state.categories.selectedSize);
    // const selectedPrice = useSelector((state) => state.categories.selectedPriceRange);
    const { category } = useSelector((state) => state.categories)
    const { selectedPriceRange, selectedSize, products } = useSelector((state) => state.products)
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = {};
    
    const handleFilterClick = () => {
        if (selectedSize) queryParams.size = selectedSize;
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
                <CategoryProducts
                    isFilterOpen={isFilterOpen}
                    setIsFilterOpen={setIsFilterOpen}
                    onFilterClick={handleFilterClick}
                    category={category} />
            </div>
        </section>
    )
}

export default CategoryPage
