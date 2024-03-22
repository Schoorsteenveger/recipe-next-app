'use client'
import React, { useState, useEffect } from 'react'
import { Rating } from 'react-custom-rating-component'

function RatingDisplay() {
	const [selectedStars, setSelectedStars] = useState(0)

	useEffect(() => {
		console.log(selectedStars)
	}, [selectedStars])

	return (
		<div className='flex justify-start align-center mb-2'>
			<Rating
				defaultValue={0}
				size='24px'
				spacing='10px'
				activeColor='#ffb700'
				onChange={(newRating) => {
					setSelectedStars(newRating)
				}}
				onHover={(hoveredRating) => console.log('hoveredRating', hoveredRating)}
			/>
		</div>
	)
}

export default RatingDisplay
