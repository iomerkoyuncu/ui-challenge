import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import SliderCard from '../Card/SliderCard'

import { ChevronRight } from '@mui/icons-material'

import { breakpoints } from './constants/breakpoints'
import Shells from '../../assets/shells.svg'
import Zoomer from '../../assets/zoomer.svg'
import Artvenue from '../../assets/artvenue.svg'

import HellenJummy from '../../assets/images/hellen-jummy.png'
import HellenaJhon from '../../assets/images/hellena-jhon.png'
import DavidOshodi from '../../assets/images/david-oshodi.png'

export default function Slider({ swiperRef }) {
	const swiper = useSwiper()

	const data = [
		{
			img: Zoomer,
			description:
				'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
			userImg: HellenJummy,
			userName: 'Hellen Jummy',
			userTitle: 'Team Lead',
		},
		{
			img: Shells,
			description:
				'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
			userImg: HellenaJhon,
			userName: 'Hellena Jhon',
			userTitle: 'Co-founder',
		},
		{
			img: Artvenue,
			description:
				'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
			userImg: DavidOshodi,
			userName: 'David Oshodi',
			userTitle: 'Manager',
		},
		{
			img: Zoomer,
			description:
				'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
			userImg: HellenJummy,
			userName: 'Hellen Jummy',
			userTitle: 'Team Lead',
		},
		{
			img: Shells,
			description:
				'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
			userImg: HellenaJhon,
			userName: 'Hellena Jhon',
			userTitle: 'Co-founder',
		},
		{
			img: Artvenue,
			description:
				'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
			userImg: DavidOshodi,
			userName: 'David Oshodi',
			userTitle: 'Manager',
		},
		{
			img: Zoomer,
			description:
				'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
			userImg: HellenJummy,
			userName: 'Hellen Jummy',
			userTitle: 'Team Lead',
		},
		{
			img: Shells,
			description:
				'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
			userImg: HellenaJhon,
			userName: 'Hellena Jhon',
			userTitle: 'Co-founder',
		},
		{
			img: Artvenue,
			description:
				'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
			userImg: DavidOshodi,
			userName: 'David Oshodi',
			userTitle: 'Manager',
		},
	]

	return (
		<>
			<Swiper
				ref={swiperRef}
				slidesPerView={5}
				spaceBetween={100}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				grabCursor={true}
				breakpoints={breakpoints}
				modules={[Autoplay, Pagination, Navigation]}>
				{data.map((el, index) => (
					<SwiperSlide key={index}>
						<div className='flex justify-center items-center'>
							<SliderCard
								img={el.img}
								description={el.description}
								userImg={el.userImg}
								userName={el.userName}
								userTitle={el.userTitle}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
