import {useEffect} from "react";
import {useStateContext} from "../context/state/context";
import {useAppContext} from "../context/app/context";
import {KeysLocalStorage} from "../costansts/keys-local-storage";

export default function useInitApp() {
    const { state } = useStateContext()
    const app = useAppContext()
    useEffect(() => {
        let user = localStorage.getItem(KeysLocalStorage.USER)
        user = user && JSON.parse(user)
        if(!state.isAuthenticated && user && Object.keys(user).length) {
            // @ts-ignore
            app!.signIn({login: user!.login, password: user!.password})
        }
        app?.getClients()
    }, [])
    return null
}
