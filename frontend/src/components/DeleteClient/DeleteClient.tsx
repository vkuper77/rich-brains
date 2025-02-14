import React, {useCallback} from 'react'
import MainButton from "../UI/Buttons/MainButton/MainButton"
import './../SignOut/style.css'
import {useAppContext} from "../../context/app/context"
import {useModalContext} from "../../context/modal-desk/context"

interface DeleteClientProps {
    callback: () => void
}

const DeleteClient: React.FC<DeleteClientProps> = ({callback = () => undefined}) => {
	const app = useAppContext()
	const {state, open, prevScreen} = useModalContext() ?? {}
	const onPressDelete = useCallback(async () => {
		await app?.deleteClient(state?.data.id)
	}, [])
	return (
		<div className='sign-out-wrapper'>
			<div onClick={callback} className='cross-icon'>
				<img alt='cross' src={require('../../assets/image/close.png')}/>
			</div>
			<div className='sign-out-container'>
				<h2 className='sign-out-title'>Delete</h2>
				<p className='sign-out-text'>Are you sure you want to delete client?</p>
				<div style={{marginBottom: '20px'}}>
					<MainButton
						type='button'
						text='Yes, delete'
						styleButton='main-danger'
						callback={onPressDelete}
					/>
				</div>
				<MainButton type='button' text='No, close' styleButton='secondary-button' callback={() => {
					prevScreen && open?.(prevScreen)
				}}/>
			</div>
		</div>
	)
}

export default DeleteClient
