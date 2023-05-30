import {useEffect} from "react"
import {useStateContext} from "../context/state/context"
import {useAppContext} from "../context/app/context"
import {getUserFromLocalStorage} from "../utils/user-local-storage"

export default function useInitApp() {
    const {state} = useStateContext()
    const app = useAppContext()
    useEffect(() => {
        const user = getUserFromLocalStorage()
        if (!state.isAuthenticated && user && Object.keys(user).length) {
            // @ts-ignore
            app?.signIn({login: user!.login, password: user!.password}, false)
        }
        app?.getClients()
    }, [])
    return null
}
