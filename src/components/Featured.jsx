import React, { useState } from 'react'
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
import Card from './Card/Card'
import MenuScale from '../assets/menu-scale.svg'
import { Drawer } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

function Featured() {
	const [menuOpen, setMenuOpen] = useState(false)
	const theme = useTheme()

	const menu_items = [
		'Products',
		'Solutions',
		'Pricing',
		'Resources',
		'Log In',
		'Sign Up Now',
	]

	const data = [
		{
			img: Trophy,
			secImg: BlueTriangle,
			title: 'Nibh viverra',
			description:
				'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
		},
		{
			img: Tunnel,
			secImg: GreenTriangle,
			title: 'Cursus amet',
			description:
				'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
		},
		{
			img: Tv,
			secImg: PurpleRectangle,
			title: 'Ipsum fermentum',
			description:
				'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
		},
	]

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<>
			<div className='min-h-[1100px] w-full flex-col justify-center items-center bg-[#fefbed] relative'>
				<div
					style={{
						backgroundImage: `url(${Triangle})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						objectFit: 'cover',
						position: 'absolute',
						width: '100%',
						height: '100%',
					}}></div>
				<header className='flex w-full bg-[#fefbed] max-sm:justify-between max-sm:items-center max-sm:p-4 h-24 py-6 px-20 z-10 text-[#78350F]'>
					<div className='flex w-1/2 '>
						<span className='font-bold text-[32px]'>Collers</span>
					</div>
					<div className='flex w-1/2 max-2xl:hidden'>
						<div className='flex w-full justify-start items-center'>
							<ul className='flex gap-4 h-12 justify-center items-center'>
								{menu_items.map((item, index) => (
									<li
										className='h-full flex justify-center items-center'
										key={index}>
										<span
											className={`h-full flex justify-center items-center font-medium cursor-pointer px-3 py-2 ${
												item === 'Sign Up Now'
													? 'border-2 border-black rounded-lg'
													: ''
											}`}>
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className='2xl:hidden sm:w-1/2 flex justify-end items-center z-10'>
						<div className='max-sm:block cursor-pointer' onClick={toggleMenu}>
							<img src={MenuScale} alt='MenuScale' />
						</div>
					</div>
				</header>

				<div className='w-full flex flex-wrap justify-center items-center gap-20 p-20'>
					<div className='w-[720px] flex flex-col justify-start gap-12 z-10'>
						<div className='max-sm:text-center'>
							<span className='font-extrabold text-7xl '>
								Collectible Sneakers
							</span>
						</div>
						<div className='max-sm:text-center'>
							<p className='text-[18px] '>
								Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
								suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
								ultrices amet.
							</p>
						</div>
						<div className='h-14 flex justify-start max-sm:justify-center items-center gap-4'>
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
						<div className='w-[486px] h-[423px] max-sm:w-[361px] max-sm:h-[314px] relative flex justify-center items-center '>
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
				<div className='w-full min-h-[365px] flex flex-wrap max-sm:text-center justify-center items-center gap-20 max-xl:py-12 max-xl:px-4'>
					{data.map((item, index) => (
						<Card
							key={index}
							img={item.img}
							secImg={item.secImg}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>
			<Drawer
				variant={'temporary'}
				anchor={'right'}
				sx={{
					'& .MuiDrawer-paper': {
						width: '25%',
						boxSizing: 'border-box',
						backgroundColor: '#fefbed',
						border: 'none',
						boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
						// [theme.breakpoints.between('md', 'xl')]: {
						//   display: 'none',
						// },
						[theme.breakpoints.down('md')]: {
							width: '100%',
							backgroundColor: '#fefbed',
						},
					},
				}}
				open={menuOpen}
				onClose={toggleMenu}
				onOpen={toggleMenu}>
				<div className='flex flex-col h-full justify-center items-center gap-8'>
					<div className='w-full p-2 m-2 flex justify-start items-center'>
						<IconButton onClick={toggleMenu}>
							<ChevronRightIcon />
						</IconButton>
					</div>
					<ul className='w-full h-full flex flex-col gap-2 m-2 p-2'>
						{menu_items.map((item, index) => (
							<li className=' flex justify-center items-center' key={index}>
								<span
									className={` flex justify-center items-center font-medium cursor-pointer px-3 py-2 ${
										item === 'Sign Up Now'
											? 'border-2 border-black rounded-lg'
											: ''
									}`}>
									{item}
								</span>
							</li>
						))}
					</ul>
				</div>
			</Drawer>
		</>
	)
}

export default Featured
