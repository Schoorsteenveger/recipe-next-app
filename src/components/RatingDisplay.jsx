'use client'
import React from 'react'
import { Rating } from 'react-custom-rating-component'

function RatingDisplay() {
	return (
		<div className='flex justify-start align-center mb-2'>
			<Rating
				defaultValue={2.5}
				size='24px'
				spacing='10px'
				activeColor='#ffb700'
				onChange={(newRating) => console.log('newRating', newRating)}
				onHover={(hoveredRating) => console.log('hoveredRating', hoveredRating)}
			/>
		</div>
	)
}

export default RatingDisplay
