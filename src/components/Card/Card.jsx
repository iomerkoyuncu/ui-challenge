import React from 'react'

function Card(props) {
	return (
		<div className='flex flex-col justify-start max-sm:justify-center max-sm:items-center max-sm:text-center w-[373px] gap-4 z-10'>
			<div className='relative'>
				<img src={props.img} alt={props.img} className=' ' />
				<img
					src={props.secImg}
					alt={props.secImg}
					className='absolute top-0 left-8 '
				/>
			</div>
			<span className='font-medium w-full text-[20px]'>{props.title}</span>
			<p className='text-[18px] w-full'>{props.description}</p>
		</div>
	)
}

export default Card
