import React from 'react'
import Check from '../assets/check.svg'
import Video from '../assets/images/video.png'
import DecoVideo from '../assets/deco-video.svg'
import GreenCircle from '../assets/green-circle.svg'

function WhyJoinUs() {
	return (
		<div className='flex justify-center items-center bg-[#fffdf6]'>
			<div className='flex max-w-[1280px] w-full h-[816px] max-sm:h-full justify-center items-center px-40 py-20'>
				<div className='max-w-[1280px] bg-white max-sm:w-[361px] flex max-sm:flex-wrap max-sm:gap-8 justify-center  items-center rounded-[30px] sm:p-20 max-sm:py-8 max-sm:px-6 relative shadow-custom-3 shadow-custom-4'>
					<div className=' flex flex-col space-y-6  sm:justify-start  items-center sm:w-[520px] max-sm:w-full'>
						<div className='w-full max-sm:text-center'>
							<span className='font-extrabold text-[56px] max-sm:text-[32px]'>
								Why join us
							</span>
						</div>
						<div className='space-y-2'>
							<div className='flex justify-start items-center max-sm:items-start'>
								<img src={Check} alt='Check' />
								<p className='text-[20px] max-sm:text-[16px] pl-4'>
									Est et in pharetra magna adipiscing ornare aliquam.
								</p>
							</div>
							<div className='flex justify-start items-center max-sm:items-start'>
								<img src={Check} alt='Check' />
								<p className='text-[20px] max-sm:text-[16px] pl-4'>
									Tellus arcu sed consequat ac velit ut eu blandit.
								</p>
							</div>
							<div className='flex justify-start items-center max-sm:items-start'>
								<img src={Check} alt='Check' />
								<p className='text-[20px] max-sm:text-[16px] pl-4'>
									Ullamcorper ornare in et egestas dolor orci.
								</p>
							</div>
						</div>
						<div className='w-full flex sm:justify-start sm:items-start  max-sm:justify-center max-sm:items-center z-2'>
							<button className='h-[56px] p-4 rounded-lg border-2 border-[#78350F] flex justify-center items-center '>
								<span className='text-[#78350F] px-4 font-medium text-[20px]'>
									Sign Up Now
								</span>
							</button>
						</div>
					</div>
					<div>
						<img
							src={DecoVideo}
							alt='DecoVideo'
							className='sm:w-[713px] sm:h-[625px] max-sm:w-[440px] max-sm:h-[386px] absolute sm:-top-10 sm:-right-10 max-sm:-bottom-[70px] -z-2'
						/>
						<div className='w-[520px] max-sm:w-[329px] max-sm:h-[234px] h-[350px] relative'>
							<img src={Video} alt='Video' className='' />
							<img
								src={GreenCircle}
								alt='GreenCircle'
								className='absolute sm:left-24 max-sm:left-16 max-sm:w-[50px] max-sm:h-[50px] max-sm:bottom-2 sm:bottom-0'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhyJoinUs
