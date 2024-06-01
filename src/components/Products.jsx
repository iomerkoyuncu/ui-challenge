import React from 'react'
import BackLights from '../assets/images/backlights.png'
import Sneaker1 from '../assets/images/sneaker-1.png'
import Sneaker2 from '../assets/images/sneaker-2.png'
import Sneaker3 from '../assets/images/sneaker-3.png'
import ProductCard from './Card/ProductCard'
import './styles.css'

function Products() {
	const data = [
		{
			img: Sneaker1,
			title: 'Title',
			description:
				'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
		},
		{
			img: Sneaker2,
			title: 'Title',
			description:
				'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
		},
		{
			img: Sneaker3,
			title: 'Title',
			description:
				'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
		},
	]
	return (
		<div className='flex justify-center items-center bg-[#0f172a] relative'>
			<div className='max-w-[1280px] max-sm:h-full sm:h-[776px] flex-col justify-center items-center  relative '>
				<div className='max-w-[1280px] sm:h-16 flex max-sm:flex-col max-sm:justify-center justify-between items-center gap-20 p-20 max-sm:py-6 max-sm:px-4 relative z-10 max-sm:gap-8'>
					<h2 className='text-white text-[56px] max-sm:text-[32px] font-extrabold'>
						The best of the best
					</h2>
					<button className='px-6 py-5 rounded-lg border-2 border-white'>
						<span className='text-white px-6 font-bold text-2xl'>
							Sign Up Now
						</span>
					</button>
				</div>
				<div className='max-w-[1280px] w-full p-8 sm:mt-10 flex justify-center items-center relative z-10'>
					<div
						style={{
							backgroundImage: `url(${BackLights})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							objectFit: 'cover',
							width: '1358px',
							height: '527px',
						}}
						className='bg-rotate absolute sm:top-0 z-0 max-sm:w-[393px] max-sm:h-[1012px]  '></div>
					<div className='max-w-[1280px] gap-12 flex max-sm:flex-wrap justify-center items-center relative z-10'>
						{data.map((item, index) => (
							<ProductCard
								key={index}
								img={item.img}
								title={item.title}
								description={item.description}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products
