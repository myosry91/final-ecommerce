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
                <div className='my-5 grid lg:grid-cols-[275px,1fr] md:grid-cols-[275px,1fr] grid-cols-1 gap-5'>
                    <Filter className='lg:block md:block hidden' />
                    {/* list category's product */}
                    <CategoryProducts category={category} />
                </div>
            </div>
        </section>
    )
}

export default CategoryPage
