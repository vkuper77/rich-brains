import {useEffect} from "react";
import {useStateContext} from "../context/state/context";
import {useAppContext} from "../context/app/context";


export default function useInitApp() {
    const { state } = useStateContext()
    const app = useAppContext()
    useEffect(() => {
        app?.getClients()
    }, [])
    return null
}
