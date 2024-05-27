import React from 'react'
import Typography from '@mui/material/Typography'

function Header() {
	const menu_items = [
		'Products',
		'Solutions',
		'Pricing',
		'Resources',
		'Log In',
		'Sign Up Now',
	]
	return (
		<header className='flex w-full bg-[#fefbed] h-24 py-6 px-20'>
			<div className='flex w-1/2 '>
				<span className='font-bold text-[32px]'>Collers</span>
			</div>
			<div className='flex w-1/2'>
				<div className='flex w-full justify-start items-center'>
					<ul className='flex  gap-4 h-12 justify-center items-center'>
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
		</header>
	)
}

export default Header
