import React, {useCallback} from 'react';

export default () => {
    /** Sign In User to App */
    const signIn = useCallback(async () => {
        console.log('signIn')
    }, [])
    return { signIn }
};
