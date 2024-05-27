import React from 'react'
import Triangle from '../assets/images/triangle.png'
import PlayCircle from '../assets/play-circle.svg'
import YellowSquare from '../assets/images/yellow-square.png'
import Sneakers from '../assets/images/sneakers.png'
import Trophy from '../assets/trophy.svg'
import Tv from '../assets/tv.svg'
import Tunnel from '../assets/tunnel.svg'
import BlueTriangle from '../assets/images/blue-triangle.png'
import GreenTriangle from '../assets/images/green-triangle.png'
import PurpleRectangle from '../assets/images/purple-rectangle.png'

function Featured() {
	return (
		<div
			className=' h-[950px] bg-[#fefbed]'
			style={{
				backgroundImage: `url(${Triangle})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				objectFit: 'cover',
			}}>
			<div className='w-full flex justify-center items-center gap-20 p-20 '>
				<div className='max-w-[720px] flex flex-col justify-start gap-12'>
					<div>
						<span className='font-extrabold text-7xl'>
							Collectible Sneakers
						</span>
					</div>
					<div>
						<p className='text-[18px]'>
							Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
							suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
							ultrices amet.
						</p>
					</div>
					<div className='h-14 flex justify-start items-center gap-4'>
						<button className='px-3 py-2 rounded-lg border-2 border-black'>
							Sign Up Now
						</button>
						<button className='flex justify-center items-center px-3 py-2'>
							<img src={PlayCircle} alt='PlayCircle' />
							<p className='px-2'>Watch Demo</p>
						</button>
					</div>
				</div>
				<div>
					<div className='w-[486px] h-[423px] relative flex justify-center items-center '>
						<img
							src={YellowSquare}
							alt='YellowSquare'
							className='-z-1 absolute '
						/>
						<img
							src={Sneakers}
							alt='Sneakers'
							className='absolute top-0 left-0 right-0 bottom-0'
						/>
					</div>
				</div>
			</div>
			<div className='w-full h-[365px] flex justify-center items-center gap-20'>
				<div className='flex flex-col justify-start  w-[373px] gap-4'>
					<div className='relative'>
						<img src={Trophy} alt='Trophy' className=' ' />
						<img
							src={BlueTriangle}
							alt='BlueTriangle'
							className='absolute top-0 left-8 '
						/>
					</div>
					<span className='font-medium w-full text-[20px]'>Nibh viverra</span>
					<p className='text-[18px] w-full'>
						Sit bibendum donec dolor fames neque vulputate non sit aliquam.
						Consequat turpis natoque leo, massa.
					</p>
				</div>
				<div className='flex flex-col justify-start  w-[373px] gap-4'>
					<div className='relative'>
						<img src={Tunnel} alt='Trophy' className=' ' />
						<img
							src={GreenTriangle}
							alt='GreenTriangle'
							className='absolute top-0 left-8 '
						/>
					</div>
					<span className='font-medium w-full text-[20px]'>Cursus amet</span>
					<p className='text-[18px] w-full'>
						Sit bibendum donec dolor fames neque vulputate non sit aliquam.
						Consequat turpis natoque leo, massa.
					</p>
				</div>
				<div className='flex flex-col justify-start  w-[373px] gap-4'>
					<div className='relative'>
						<img src={Tv} alt='Trophy' className=' ' />
						<img
							src={PurpleRectangle}
							alt='PurpleRectangle'
							className='absolute top-0 left-8 '
						/>
					</div>
					<span className='font-medium w-full text-[20px]'>
						Ipsum fermentum
					</span>
					<p className='text-[18px] w-full'>
						Sit bibendum donec dolor fames neque vulputate non sit aliquam.
						Consequat turpis natoque leo, massa.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Featured
