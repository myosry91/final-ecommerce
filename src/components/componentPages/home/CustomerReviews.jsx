import React from 'react'
import ReviewCard from '../../ui/ReviewCard'
import useWindowWidth from '../../../customHooks/useWindowWidth'
import Drag from '../../ui/Drag'

const CustomerReviews = ({ containerRef, showBlur = true }) => {
    const windowWidth = useWindowWidth()

    return (
        <Drag containerRef={containerRef}>
            {Array.from({ length: 8 }).map((_, index) => (
                <ReviewCard key={index} name="Samantha Co." comment="I absolutely love this t-shirt! The design is unique and the fabric
              feels so comfortable. As a fellow designer, I appreciate the attention
              to detail. It's become my favorite go-to shirt." postDate="Posted on August 14, 2023" className="snap-center flex-shrink-0 lg:max-w-80 md:max-w-80 w-full " />
            ))}
            {/* blur effect */}
            <div>
                {windowWidth >= 780 && showBlur ? (
                    <>
                        <div className="left-blur absolute left-0 top-0 bottom-0 w-32  z-10  bg-gradient-to-r from-slate-50/100 to-slate-50/5 backdrop-blur-[.4px]" ></div>
                        <div className="right-blur  absolute top-0 bottom-0 right-0 w-32 h-transparent z-10  bg-gradient-to-l  from-slate-50/100 to-slate-50/5 backdrop-blur-[.4px] " ></div>
                    </>
                ) : ""}
            </div>
        </Drag>
    )
}

export default CustomerReviews
