import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const RemoveButton = () => {
	return (
		<button className='text-red-400'>
			<FontAwesomeIcon
				icon={faTrashCan}
				className='fa-xl text-black hover:cursor-pointer hover:text-neutral-400'
			/>
		</button>
	)
}
export default RemoveButton
