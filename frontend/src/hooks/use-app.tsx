import React, {useCallback} from 'react';
import {useModalContext} from "../context/modal-desk/context";
import {AddClientParams, AppApi, AuthApi} from "../api";
import {useStateContext} from "../context/state/context";
import {StoreActions} from "../state/types";

export default () => {
    const {close: closeModal, open, prevScreen} = useModalContext()
    const {dispatch} = useStateContext()

    /** Sign In User to App */
    const signIn = useCallback(async () => {
        try {
            const response = await AuthApi.signIn({login: 'richbrains', password: 'richbrains_test'})
            dispatch({type: StoreActions.LOGIN, payload: {login: response.login}})
            /** if the card has been pressed but is not authorized */
            if (prevScreen) {
                open(prevScreen)
            } else {
                closeModal()
            }
        } catch (e) {
            alert(e)
            console.error('[signIn]:', e)
            closeModal()
        }
    }, [prevScreen])

    /** Sign Out */
    const signOut = useCallback(async () => {
        try {
            await AuthApi.signOut()
            dispatch({type: StoreActions.LOGOUT})
        } catch (e) {
            alert(e)
            console.error('[signOut]:', e)
        } finally {
            closeModal()
        }
    }, [])

    /** Get Clients */
    const getClients = useCallback(async () => {
        try {
            const resp = await AppApi.getClients()
            dispatch({type: StoreActions.SET_CLIENTS, payload: resp.clients})
        } catch (e) {
            alert(e)
            console.error('[getClients]:', e)
        }
    }, [])

    /** Add Client */
    const addClient = useCallback(async (data: AddClientParams) => {
        try {
            const resp = await AppApi.addClient(data)
            dispatch({type: StoreActions.ADD_CLIENT, payload: resp.client})
        } catch (e) {
            alert(e)
            console.error('[addClient]:', e)
        } finally {
            closeModal()
        }
    }, [])

    /** Delete Client */
    const deleteClient = useCallback(async () => {
        console.log('deleteClient')
    }, [])

    return {signIn, signOut, getClients, addClient, deleteClient}
};
