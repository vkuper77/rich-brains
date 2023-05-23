import React, {useCallback} from 'react';
import {useModalContext} from "../context/modal-desk/context";

export default () => {
    const {close: closeModal } = useModalContext()
    /** Sign In User to App */
    const signIn = useCallback(async () => {
        console.log('signIn')
        closeModal()
    }, [])

    /** Sign Out */
    const signOut = useCallback(async () => {
        console.log('signOut')
    }, [])

    /** Delete User */
    const deleteClient = useCallback(async () => {
        console.log('deleteClient')
    }, [])

    return { signIn, signOut, deleteClient }
};
