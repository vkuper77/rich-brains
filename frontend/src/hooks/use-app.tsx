import {useCallback, useState} from 'react'
import {useModalContext} from "../context/modal-desk/context"
import {AppApi, AuthApi} from "../api"
import {useStateContext} from "../context/state/context"
import {StoreActions} from "../state/types"
import {AddClientParams, EditClientParams, SignInParams} from "../models/responce/responce"
import {useTipsContext} from "../context/tips/context"
import {TipsType} from "../costansts/type-modal"
import {sleep} from "../utils/sleep"
import {LoadingType} from "../costansts/loading"

type l = {[key: number ]:boolean}

const initialSateLoad: l = {
	[LoadingType.SIGN_IN]: false,
	[LoadingType.GET_CLIENTS]: false
}

export default () => {
	const {close: closeModal, open, prevScreen} = useModalContext() ?? {}
	const { setShowTips } = useTipsContext()
	const {dispatch} = useStateContext()
	const [loading, setLoading] = useState<l>(initialSateLoad)

	/** Sign In User to App */
	const signIn = useCallback(async (data: SignInParams, showTips = true) => {
		setLoading((p) =>
			({...p, [LoadingType.SIGN_IN]: true})
		)
		try {
			const response = await AuthApi.signIn(data)
			/**show success tips*/
			showTips && setShowTips({type: TipsType.Success, message: 'You have successfully logged in', duration: 3000})
			/**set store*/
			dispatch({type: StoreActions.LOGIN, payload: {login: response.login}})

			/** if the card has been pressed but is not authorized */
			if (prevScreen) {
				open?.(prevScreen)
			} else {
				closeModal?.()
			}
		} catch (e) {
			/**show error tips*/
			setShowTips({type: TipsType.Error, message: 'Something went wrong', duration: 3000})
			console.error('[signIn]:', e)
			closeModal?.()
		} finally {
			setLoading((p) =>
				({...p, [LoadingType.SIGN_IN]: false})
			)
		}
	}, [prevScreen])

	/** Sign Out */
	const signOut = useCallback(async () => {
		try {
			await AuthApi.signOut()
			dispatch({type: StoreActions.LOGOUT})
		} catch (e) {
			/**show error tips*/
			setShowTips({type: TipsType.Error, message: 'Something went wrong', duration: 3000})
			console.error('[signOut]:', e)
		} finally {
			closeModal?.()
		}
	}, [])

	/** Get Clients */
	const getClients = useCallback(async () => {
		setLoading((p) =>
			({...p, [LoadingType.GET_CLIENTS]: true})
		)
		try {
			const resp = await AppApi.getClients()
			/**load emission*/
			await sleep(1000)
			/**set store*/
			dispatch({type: StoreActions.SET_CLIENTS, payload: resp.clients})
		} catch (e) {
			/**show error tips*/
			setShowTips({type: TipsType.Error, message: 'Something went wrong', duration: 3000})
			console.error('[getClients]:', e)
		} finally {
			setLoading((p) =>
				({...p, [LoadingType.GET_CLIENTS]: false})
			)
		}
	}, [])

	/** Add Client */
	const addClient = useCallback(async (data: AddClientParams) => {
		try {
			const resp = await AppApi.addClient(data)
			/**show success tips*/
			setShowTips({type: TipsType.Success, message: 'New client was added successfully', duration: 3000})
			/**set store*/
			dispatch({type: StoreActions.ADD_CLIENT, payload: resp.client})
		} catch (e) {
			setShowTips({type: TipsType.Error, message: 'Something went wrong', duration: 3000})
			console.error('[addClient]:', e)
		} finally {
			closeModal?.()
		}
	}, [])

	/** Edit Client */
	const editClient = useCallback(async (data: EditClientParams) => {
		try {
			const resp = await AppApi.editClient(data)
			/**show success tips*/
			setShowTips({type: TipsType.Success, message: 'Client was edited successfully', duration: 3000})
			/**set store*/
			dispatch({type: StoreActions.EDIT_CLIENT, payload: resp.client})
		} catch (e) {
			/**show error tips*/
			setShowTips({type: TipsType.Error, message: 'Something went wrong', duration: 3000})
			console.error('[editClient]:', e)
		} finally {
			closeModal?.()
		}
	}, [])

	/** Delete Client */
	const deleteClient = useCallback(async (id: string) => {
		try {
			await AppApi.deleteClient({id})
			/**show success tips*/
			setShowTips({type: TipsType.Success, message: 'Client was deleted', duration: 3000})
			/**set store*/
			dispatch({type: StoreActions.DELETE_CLIENT, payload: {id}})
		} catch (e) {
			/**show error tips*/
			setShowTips({type: TipsType.Error, message: 'Something went wrong', duration: 3000})
			console.error('[deleteClient]:', e)
		} finally {
			closeModal?.()
		}
	}, [])

	return {loading, signIn, signOut, getClients, addClient, editClient, deleteClient}
}
