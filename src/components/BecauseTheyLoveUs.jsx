import React from 'react'
import LeftArrow from '../assets/left-arrow.svg'
import RightArrow from '../assets/right-arrow.svg'
import Slider from '../components/Slider'
import { useRef } from 'react'

function BecauseTheyLoveUs() {
	const swiperRef = useRef(null)

	return (
		<div className='w-full  flex flex-col justify-center items-center sm:h-[732px] relative bg-[#fffdf6] gap-20 sm:p-20 max-sm:py-12 max-sm:px-4'>
			<div className='w-[1280px]  flex max-sm:flex-wrap justify-between max-sm:justify-center items-center'>
				<h2 className='font-extrabold text-[56px] max-sm:text-[32px] '>
					Because they love us
				</h2>
				<div className='h-12 space-x-6 max-sm:hidden'>
					<button
						onClick={() =>
							swiperRef.current && swiperRef.current.swiper.slidePrev()
						}>
						<img src={LeftArrow} alt='LeftArrow' />
					</button>
					<button
						onClick={() =>
							swiperRef.current && swiperRef.current.swiper.slideNext()
						}>
						<img src={RightArrow} alt='RightArrow' />
					</button>
				</div>
			</div>
			<div className='w-screen flex justify-center items-center'>
				<div className='bg-[#fde68a] sm:w-[1360px] max-sm:w-full sm:h-[421px] max-sm:h-[360px] absolute sm:top-36 max-sm:top-32'></div>
				<Slider swiperRef={swiperRef} />
			</div>
		</div>
	)
}

export default BecauseTheyLoveUs
