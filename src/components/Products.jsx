import React from 'react'
import BackLights from '../assets/images/backlights.png'
import Sneaker1 from '../assets/images/sneaker-1.png'
import Sneaker2 from '../assets/images/sneaker-2.png'
import Sneaker3 from '../assets/images/sneaker-3.png'
import ShoppingCart from '../assets/shopping-cart.svg'

function Products() {
	return (
		<div className='flex justify-center items-center bg-[#0f172a]'>
			<div className='max-w-[1440px] h-full flex-col justify-center items-center p-20'>
				<div className='max-w-[1280px] h-16 flex justify-between items-center gap-20'>
					<h2 className='text-white text-[56px] font-extrabold'>
						The best of the best
					</h2>
					<button className='px-6 py-5 rounded-lg border-2 border-white'>
						<span className='text-white px-6 font-bold text-2xl'>
							{' '}
							Sign Up Now
						</span>
					</button>
				</div>
				<div
					style={{
						backgroundImage: `url(${BackLights})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						objectFit: 'cover',
					}}
					className='max-w-[1358px] h-[527px] p-8 mt-10'>
					<div className='max-w-[1280px] gap-12 flex justify-center items-center'>
						<div className='text-white w-[364px] h-full  gap-4 bg-[#0f172a] rounded-[10px] border-[1px] border-[#0f172a] shadow-custom-1 shadow-custom-2'>
							<div className='rounded-t-[4px]'>
								<img
									src={Sneaker1}
									alt='Sneaker1'
									className='rounded-t-[4px]'
								/>
							</div>
							<div className='flex flex-col pb-0 pt-8 pr-8 pl-8 gap-4'>
								<div>
									<span className='text-[24px] font-bold'>Title</span>
								</div>
								<div>
									<p className='text-[18px]'>
										Egestas elit dui scelerisque ut eu purus aliquam vitae
										habitasse.
									</p>
								</div>
							</div>
							<div className='p-8 gap-4 h-[120px]'>
								<button className='rounded-lg border-2 border-white flex justify-center items-center p-4 w-full'>
									<img src={ShoppingCart} alt='ShoppingCart' />
									<span className='px-3'></span>Buy Now
								</button>
							</div>
						</div>
						<div className='text-white w-[364px] h-full  gap-4 bg-[#0f172a] rounded-[10px] border-[1px] border-[#0f172a] shadow-custom-1 shadow-custom-2'>
							<div className='rounded-t-[4px]'>
								<img
									src={Sneaker2}
									alt='Sneaker2'
									className='rounded-t-[4px]'
								/>
							</div>
							<div className='flex flex-col pb-0 pt-8 pr-8 pl-8 gap-4'>
								<div>
									<span className='text-[24px] font-bold'>Title</span>
								</div>
								<div>
									<p className='text-[18px]'>
										Egestas elit dui scelerisque ut eu purus aliquam vitae
										habitasse.
									</p>
								</div>
							</div>
							<div className='p-8 gap-4 h-[120px]'>
								<button className='rounded-lg border-2 border-white flex justify-center items-center p-4 w-full'>
									<img src={ShoppingCart} alt='ShoppingCart' />
									<span className='px-3'></span>Buy Now
								</button>
							</div>
						</div>
						<div className='text-white w-[364px] h-full  gap-4 bg-[#0f172a] rounded-[10px] border-[1px] border-[#0f172a] shadow-custom-1 shadow-custom-2'>
							<div className='rounded-t-[4px]'>
								<img
									src={Sneaker3}
									alt='Sneaker3'
									className='rounded-t-[4px]'
								/>
							</div>
							<div className='flex flex-col pb-0 pt-8 pr-8 pl-8 gap-4'>
								<div>
									<span className='text-[24px] font-bold'>Title</span>
								</div>
								<div>
									<p className='text-[18px]'>
										Egestas elit dui scelerisque ut eu purus aliquam vitae
										habitasse.
									</p>
								</div>
							</div>
							<div className='p-8 gap-4 h-[120px]'>
								<button className='rounded-lg border-2 border-white flex justify-center items-center p-4 w-full'>
									<img src={ShoppingCart} alt='ShoppingCart' />
									<span className='px-3'></span>Buy Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products
