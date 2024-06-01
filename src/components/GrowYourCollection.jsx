import React, { useState } from 'react'
import Search from '../assets/search.svg'
import ShieldCheck from '../assets/shield-check.svg'
import Rocket from '../assets/rocket.svg'
import Screen from '../assets/screen.svg'
import Podcast from '../assets/podcast.svg'
import SettingsAlt from '../assets/settings-alt.svg'
import ArrowRight from '../assets/arrow-right.svg'
import Grow1 from '../assets/images/grow-1.png'
import Grow2 from '../assets/images/grow-2.png'
import Grow3 from '../assets/images/grow-3.png'
import Waves from '../assets/images/waves.png'
import MobileSneakers from '../assets/images/mobile-sneakers.png'

function GrowYourCollection() {
	const [active, setActive] = useState(0)

	const data = [
		{
			icon: Search,
			title: 'Bibendum tellus',
		},
		{
			icon: ShieldCheck,
			title: 'Cras eget',
		},
		{
			icon: Rocket,
			title: 'Dolor pharetra',
		},
		{
			icon: Screen,
			title: 'Amet, fringilla',
		},
		{
			icon: Podcast,
			title: 'Amet nibh',
		},
		{
			icon: SettingsAlt,
			title: 'Sed velit',
		},
	]
	return (
		<div className='sm:h-[1050px] max-sm:h-full relative w-full flex flex-col justify-center items-center bg-[#fffdf6] px-20 max-sm:px-4 max-sm:py-8  pt-0 pb-32  space-y-20'>
			<div
				className='absolute bottom-0'
				style={{
					width: '100%',
					height: '684px',
				}}>
				<img
					src={Waves}
					alt='Waves'
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</div>
			<div className='max-w-[1280px] w-full flex flex-col z-10 gap-8'>
				<h2 className='font-extrabold text-[56px] max-sm:text-[32px] max-sm:text-center'>
					Grow your collection
				</h2>
				<p className='text-[18px] leading-7 max-sm:text-center'>
					Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
					amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
					sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
					proin neque placerat at bibendum quam tellus.
				</p>
			</div>
			<div className='max-w-[1280px] w-full flex max-lg:flex-wrap gap-20'>
				<div className='flex flex-col max-lg:flex-row gap-4'>
					{data.map((item, index) => (
						<div
							key={index}
							className={`w-[256px] z-10 cursor-pointer flex justify-between items-center  gap-4 p-4 h-14  ${
								index === active ? 'shadow-lg rounded-lg bg-white' : ''
							}`}
							onClick={() => setActive(index)}>
							<div className='flex justify-start items-center'>
								<img src={item.icon} alt={item.title} />
								<p className='px-4 text-[17px] font-medium '>{item.title}</p>
							</div>
							{index === active && <img src={ArrowRight} alt='Arrow Right' />}
						</div>
					))}
				</div>
				<div className='w-full max-lg:hidden'>
					<div className='relative'>
						<img src={Grow1} alt='Grow1' className='absolute top-0' />
						<img
							src={Grow2}
							alt='Grow2'
							className='absolute top-[100px] left-[100px] '
						/>
						<img
							src={Grow3}
							alt='Grow3'
							className='absolute top-48 -right-24 '
						/>
					</div>
				</div>
				<div className='w-full z-10 flex justify-center items-center lg:hidden'>
					<img src={MobileSneakers} alt='Mobile Sneakers' />
				</div>
			</div>
		</div>
	)
}

export default GrowYourCollection
