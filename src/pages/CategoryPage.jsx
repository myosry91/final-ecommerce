import React from 'react'
import Filter from '../components/componentPages/category/Filter'
import CurrentPath from '../components/ui/CurrentPath'

const CategoryPage = () => {
    return (
        <section >
            <div className="container">
                <CurrentPath currentPath={"Category"} />
                <div className=' my-7 grid lg:grid-cols-[295px,1fr] md:grid-cols-[295px,1fr] grid-cols-1 gap-5'>
                    <Filter className='lg:block md:block hidden' />
                    {/* list category's product */}
                     
                </div>
            </div>
        </section>
    )
}

export default CategoryPage
