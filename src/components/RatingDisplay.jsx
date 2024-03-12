import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function RatingDisplay() {
	return (
		<div className='mb-2 cursor-pointer'>
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
		</div>
	)
}

export default RatingDisplay
