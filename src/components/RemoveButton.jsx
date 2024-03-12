import { HiOutlineTrash } from 'react-icons/hi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faX } from '@fortawesome/free-solid-svg-icons'

const RemoveButton = () => {
	return (
		<button className='text-red-400'>
			{/* <HiOutlineTrash size={28} /> */}
			<FontAwesomeIcon
				icon={faTrashCan}
				className='fa-xl text-red-600 hover:cursor-pointer hover:text-red-400'
			/>
		</button>
	)
}
export default RemoveButton
