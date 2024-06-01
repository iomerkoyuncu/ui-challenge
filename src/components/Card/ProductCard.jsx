import React from 'react'
import ShoppingCart from '../../assets/shopping-cart.svg'

function ProductCard(props) {
	return (
		<div className='text-white w-[364px] h-full  gap-4 bg-[#0f172a] rounded-[10px] border-[1px] border-[#0f172a] shadow-custom-1 shadow-custom-2'>
			<div className='rounded-t-[4px]'>
				<img src={props.img} alt={props.img} className='rounded-t-[4px]' />
			</div>
			<div className='flex flex-col pb-0 pt-8 pr-8 pl-8 gap-4'>
				<div>
					<span className='text-[24px] font-bold'>{props.title}</span>
				</div>
				<div>
					<p className='text-[18px]'>{props.description}</p>
				</div>
			</div>
			<div className='p-8 gap-4 h-[120px]'>
				<button className='rounded-lg border-2 border-white flex justify-center items-center p-4 w-full'>
					<img src={ShoppingCart} alt='ShoppingCart' />
					<span className='px-3'></span>Buy Now
				</button>
			</div>
		</div>
	)
}

export default ProductCard
