import React, { useEffect } from 'react'
import Filter from '../components/componentPages/category/Filter'
import CurrentPath from '../components/ui/CurrentPath'
import CategoryProducts from '../components/componentPages/category/CategoryProducts'
import { fetchCategory } from '../redux/features/CategoriesSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { category } = useSelector((store) => store.categories)

    useEffect(() => {
        dispatch(fetchCategory(id))
    }, [])

    return (
        <section>
            <div className="container">
                <CurrentPath currentPath={["Category"]} />
                <CategoryProducts category={category} />
            </div>
        </section>
    )
}

export default CategoryPage
