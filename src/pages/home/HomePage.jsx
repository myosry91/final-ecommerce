import React from 'react'
import headerBG from '../../assets/images/headerBG.jpg'

const HomePage = () => {
    return (
        <section className=' bg-headerBackground'>
            <div className="container">
                <header className='grid md:grid-cols-2 grid-cols-1 '  >
                    <div className='flex flex-col gap-3  justify-center'>
                        <h1 className='font-cairo font-bold md:text-6xl text-4xl w-[315px] md:w-auto '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className='text-descriptionColor md:w-auto sm:w-[358px] font-inter' >Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className='p-buttonPadding bg-buttonBackground text-white rounded-buttonRadius md:w-[210px] mt-5 font-inter' >shop now</button>
                        <div className="scores flex flex-wrap gap-3 mt-6 justify-center md:justify-normal ">
                            <span className='  border-r-2 border-r-slate-200 px-4 font-inter '>
                                <p className='font-bold md:text-4xl text-2xl'>200+</p>
                                <p className='font-inter text-descriptionColor text-xs md:text-base'>International Brands</p>
                            </span>
                            <span className='  border-r-2 border-r-slate-200 px-4 font-inter'>
                                <p className='font-bold md:text-4xl  text-2xl '>2,000+</p>
                                <p className='font-inter text-descriptionColor text-xs md:text-base'>High-Quality Products</p>
                            </span>
                            <span className=' px-4 mx-auto md:mx-0 font-inter '>
                                <p className='font-bold md:text-4xl  text-2xl'>30,000+</p>
                                <p className='font-inter text-descriptionColor text-xs md:text-base' >Happy Customers</p>
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center relative '>
                        <span className='md:w-[104px] md:h-[104px] w-[90px] h-[90px] bg-black clip-star p-10 absolute top-5 right-10' ></span>
                        <span className='w-[56px] h-[56px] bg-black clip-star p-10 absolute ' ></span>
                        <img src={headerBG} alt="header" />
                    </div>
                </header>
            </div>
                <div className='bg-forground text-forgroundColor p-5 flex gap-4 justify-between flex-wrap ' >
                    <span className='font-cairo font-bold text-4xl ' >VERSACE</span>
                    <span className='font-cairo font-bold text-4xl ' >ZARA</span>
                    <span className='font-cairo font-bold text-4xl ' >GUCCI</span>
                    <span className='font-cairo font-bold text-4xl ' >PRADA</span>
                    <span className='font-cairo font-bold text-4xl' >CHALVIN CLEIN</span>
                </div>
        </section>
    )
}

export default HomePage

