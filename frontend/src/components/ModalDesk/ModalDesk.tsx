import React from 'react'
import {useModalContext} from "../../context/modal-desk/context"
import Modal from "../UI/Modal/Modal"
import SignIn from "../SignIn/SignIn"
import DeleteClient from "../DeleteClient/DeleteClient"
import SignOut from "../SignOut/SignOut"
import PreviewClient from "../PreviewClient/PreviewClient"
import AddEditClient from "../AddEditClient/AddEditClient"
import {ModalType} from "../../costansts/type-modal"

export interface StateModal {
    type: ModalType | null
    data?: any
}

type ModalContentProps = {
    state: StateModal | null;
    callback: () => void;
};

type DeskType = { [key in ModalType]: React.FC<ModalContentProps> } & { 0: React.FC<ModalContentProps> };

const Desk: DeskType = {
	[ModalType.SignIn]: (p) => <SignIn {...p} />,
	[ModalType.SignOut]: (p ) => <SignOut {...p} />,
	[ModalType.DeleteClient]: (p ) => <DeleteClient {...p} />,
	[ModalType.PreviewClient]: (p ) => <PreviewClient {...p} />,
	[ModalType.AddEditClient]: (p ) => <AddEditClient {...p} />,
	0: () => null
}

const ModalDesk: React.FC = () => {
	const modal = useModalContext()
	const Content = Desk[modal?.state.type ?? 0]
	return (
		<>
			<Modal isOpen={Boolean(modal?.state.type)} onClose={close}>
				<Content state={modal?.state ?? null} callback={close}/>
			</Modal>
		</>
	)
}

export default ModalDesk
