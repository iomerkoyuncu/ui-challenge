import React from 'react'
import AppStore from '../assets/images/app-store.png'
import GooglePlay from '../assets/images/google-play.png'
import World from '../assets/world.svg'
import Youtube from '../assets/youtube.svg'
import Twitter from '../assets/twitter.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.svg'
function Footer() {
	return (
		<footer className='bg-[#0F172A] text-white flex h-full flex-col justify-center items-center'>
			<div className='flex flex-row max-xl:flex-wrap max-xl:justify-center max-w-[1280px] w-full border-y-[1px] border-[#334155] gap-12 py-12'>
				<div className='flex flex-col w-[284px] justify-start items-start max-sm:text-center max-sm:justify-center max-xl:items-center max-sm:w-full'>
					<ul>
						<li className='py-4 '>
							<span className='font-medium'>Product</span>
						</li>
						<li className='py-4'>
							<span>Pricing</span>
						</li>
						<li className='py-4'>
							<span>Overview</span>
						</li>
						<li className='py-4'>
							<span>Browse</span>
						</li>
						<li className='py-4'>
							<span>Accessibility</span>
						</li>
						<li className='py-4'>
							<span>Five</span>
						</li>
					</ul>
				</div>
				<div className='flex flex-col w-[284px] justify-start items-start max-sm:text-center max-sm:justify-center max-xl:items-center max-sm:w-full'>
					<ul>
						<li className='py-4'>
							<span className='font-medium'>Solutions</span>
						</li>
						<li className='py-4'>
							<span>Brainstorming</span>
						</li>
						<li className='py-4'>
							<span>Ideation</span>
						</li>
						<li className='py-4'>
							<span>Wireframig</span>
						</li>
						<li className='py-4'>
							<span>Research</span>
						</li>
						<li className='py-4'>
							<span>Design</span>
						</li>
					</ul>
				</div>
				<div className='flex flex-col w-[284px] justify-start items-start max-sm:text-center max-sm:justify-center max-xl:items-center max-sm:w-full'>
					<ul>
						<li className='py-4'>
							<span className='font-medium'>Support</span>
						</li>
						<li className='py-4'>
							<span>Contact Us</span>
						</li>
						<li className='py-4'>
							<span>Developers</span>
						</li>
						<li className='py-4'>
							<span>Documentation</span>
						</li>
						<li className='py-4'>
							<span>Integrations</span>
						</li>
						<li className='py-4'>
							<span>Reports</span>
						</li>
					</ul>
				</div>
				<div className='flex flex-col w-[284px] justify-start items-start gap-2 max-sm:text-center max-sm:justify-center max-xl:items-center max-sm:w-full'>
					<div className='py-4'>
						<span className='font-medium'>Get the App</span>
					</div>
					<img src={AppStore} alt='App Store' className='py-3' />
					<img src={GooglePlay} alt='Google Play' className='py-3' />
					<div className='w-full flex justify-start items-end pt-12 pb-3 max-xl:text-center max-xl:justify-center max-xl:items-center max-sm:w-full'>
						<span>Follow Us</span>
					</div>
					<div className='flex flex-row justify-start items-center gap-4'>
						<img src={Youtube} alt='Youtube' className='cursor-pointer' />
						<img src={Twitter} alt='Twitter' className='cursor-pointer' />
						<img src={Facebook} alt='Facebook' className='cursor-pointer' />
						<img src={Instagram} alt='Instagram' className='cursor-pointer' />
						<img src={Linkedin} alt='Linkedin' className='cursor-pointer' />
					</div>
				</div>
			</div>
			<div className='flex flex-row max-sm:flex-wrap justify-between max-xl:justify-evenly items-center max-w-[1280px] sm:h-24 w-full gap-12 py-6 max-sm:text-center max-sm:justify-center max-xl:items-center max-sm:w-full'>
				<div>
					<span>Collers @ 2023. All rights reserved.</span>
				</div>
				<div>
					<ul className='flex flex-row '>
						<li className=' px-3'>
							<span>Terms</span>
						</li>
						<li className=' px-3'>
							<span>Privacy</span>
						</li>
						<li className=' px-3'>
							<span>Contact</span>
						</li>
						<li className='flex px-3 gap-2'>
							<img src={World} alt='World' />
							<span>EN</span>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
