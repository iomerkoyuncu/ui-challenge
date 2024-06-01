import React from 'react'
import Chart from '../assets/images/chart.png'
import Ellipses from '../assets/images/ellipses.png'
import Marker from '../assets/images/marker.png'
import MobileChart from '../assets/images/mobile-chart.png'
import MobileEllipses from '../assets/images/mobile-ellipses.png'

function ShoesCollected() {
	return (
		<div className='flex justify-center items-center bg-[#78350F]'>
			<div className='  pt-6 flex justify-center w-[1050px] items-center '>
				<div className='flex justify-center items-center max-sm:w-full w-[1050px] h-[717px]  relative '>
					<img src={Chart} alt='Chart' className='absolute  max-sm:hidden' />
					<img
						src={Ellipses}
						alt='Ellipses'
						className='sm:absolute sm:right-[115px] sm:top-[110px] max-sm:hidden'
					/>
					<img
						src={MobileChart}
						alt='MobileChart'
						className='absolute max-sm:block sm:hidden right-[0]'
					/>
					<img
						src={MobileEllipses}
						alt='MobileEllipses'
						className='absolute max-sm:block sm:hidden right-[0] bottom-[170px]'
					/>

					<div className='absolute flex flex-col justify-center items-center '>
						<h1 className=' font-extrabold sm:text-[96px] max-sm:text-[48px] text-center text-white'>
							11,658,467
						</h1>
						<h2 className='  font-extrabold sm:text-[56px] max-sm:text-[32px] text-center text-white'>
							Shoes Collected
						</h2>
					</div>
					<img
						src={Marker}
						alt='Marker'
						className='absolute sm:-left-[10px] top-[0] '
					/>
				</div>
			</div>
		</div>
	)
}

export default ShoesCollected
