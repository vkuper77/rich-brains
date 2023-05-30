import React from 'react'
import './style.css'

interface DeleteButtonProps {
    callback: () => void
}

const DeleteButton: React.FC<DeleteButtonProps> = ({callback}) => {
	return (
		<div onClick={callback} className='button-container'>
			<img alt='icon' src={require('../../../../assets/image/trash.png')} />
			<span>Delete client</span>
		</div>
	)
}

export default DeleteButton
