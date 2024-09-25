import React from 'react'
import ReviewCard from '../../ui/ReviewCard'
import useWindowWidth from '../../../customHooks/useWindowWidth'
import Drag from '../../ui/Drag'

const CustomerReviews = ({ containerRef, showBlur = true }) => {
    const windowWidth = useWindowWidth()

    // const handleDragScroll = (e) => {
    //     const slider = containerRef.current
    //     let scrollLeft, startX, isDown = false;
    //     // for large scrren mouse drag
    //     slider.addEventListener("mousedown", (e) => {
    //         isDown = true
    //         slider.classList.add("active")
    //         startX = e.pageX - slider.offsetLeft
    //         scrollLeft = slider.scrollLeft
    //     })

    //     slider.addEventListener("mouseleave", () => {
    //         isDown = false
    //         slider.classList.remove("active")
    //     })

    //     slider.addEventListener("mouseup", () => {
    //         isDown = false
    //         slider.classList.remove("active")
    //     })

    //     slider.addEventListener("mousemove", (e) => {
    //         if (!isDown) return
    //         e.preventDefault()
    //         const x = e.pageX - slider.offsetLeft
    //         const walk = (x - startX) * 2;
    //         slider.scrollLeft = scrollLeft - walk
    //     })

    //     // for mobile drag touch
    //     slider.addEventListener("touchstart", (e) => {
    //         isDown = true
    //         slider.classList.add("active")
    //         console.log(e.touches)
    //         startX = e.touches[0].pageX - slider.offsetLeft
    //         scrollLeft = slider.scrollLeft
    //     })

    //     slider.addEventListener("touchend", () => {
    //         isDown = false
    //         slider.classList.remove("active")
    //     })

    //     slider.addEventListener("touchmove", (e) => {
    //         if (!isDown) return
    //         e.preventDefault()
    //         const x = e.touches[0].pageX - slider.offsetLeft
    //         const walk = (x - startX) * 2;
    //         slider.scrollLeft = scrollLeft - walk
    //     })
    // }
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
