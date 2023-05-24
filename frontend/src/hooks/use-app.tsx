import React, {useCallback} from 'react';
import {useModalContext} from "../context/modal-desk/context";
import {AuthApi} from "../api";
import {useStateContext} from "../context/state/context";
import {StoreActions} from "../state/types";

export default () => {
    const {close: closeModal } = useModalContext()
    const { dispatch } = useStateContext()

    /** Sign In User to App */
    const signIn = useCallback(async () => {
        try {
            const response = await AuthApi.signIn({login:'richbrains', password: 'richbrains_test'})
            dispatch({type: StoreActions.LOGIN, payload: {login: response.login} })
        } catch (e) {
            alert(e)
            console.error('[signIn]:', e)
        } finally {
            closeModal()
        }
    }, [])

    /** Sign Out */
    const signOut = useCallback(async () => {
        try {
            await AuthApi.signOut()
            dispatch({type: StoreActions.LOGOUT })
        } catch (e) {
            alert(e)
            console.error('[signOut]:', e)
        } finally {
            closeModal()
        }
    }, [])

    /** Delete User */
    const deleteClient = useCallback(async () => {
        console.log('deleteClient')
    }, [])

    return { signIn, signOut, deleteClient }
};
