import React, {useCallback} from 'react';

export default () => {
    /** Sign In User to App */
    const signIn = useCallback(async () => {
        console.log('signIn')
    }, [])

    /** Sign Out */
    const signOut = useCallback(async () => {
        console.log('signOut')
    }, [])

    return { signIn, signOut }
};
