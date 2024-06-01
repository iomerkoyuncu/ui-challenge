import React from 'react'
import Switch from '@mui/material/Switch'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

function EventCard(props) {
	return (
		<>
			<div className='sm:w-[352px] sm:h-[430px] max-sm:w-[319px] max-sm:h-[296px] flex flex-col justify-center items-start rounded-[20px] border-[1px] border-[#e2e8f0] bg-white p-8 max-sm:p-6 space-y-8  shadow-custom-7 shadow-custom-8'>
				<div className='flex justify-start items-center max-sm:py-4'>
					<img src={props.img} alt='alt' />
				</div>
				<div className='sm:h-[190px] w-full'>
					<p className='text-[24px] max-sm:text-[16px] sm:leading-10 max-sm:leading-6 w-[320px]'>
						{props.description}
					</p>
				</div>
				<div className='pt-4 flex justify-start items-center w-full gap-4'>
					<img src={props.userImg} alt='userImg' className='w-16 h-16' />
					<div className='flex flex-col justify-start items-start w-full '>
						<span className='text-[18x]'>{props.userName}</span>
						<span className='text-[#475569]'>{props.userTitle}</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default EventCard
