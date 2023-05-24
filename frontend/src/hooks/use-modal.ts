import {useCallback, useRef, useState} from "react";
import {StateModal} from "../components/ModalDesk/ModalDesk";

const initState = {type: null, data: null}

export default function useModal() {
    const [modal, setModal] = useState<StateModal>(initState)
    const prevOrNextScreenRef = useRef<StateModal>(initState);

    /**Close modal*/
    const close = useCallback(() => {
        setModal(initState)
        prevOrNextScreenRef.current = initState
    }, [])

    /** Open modal */
    const open = useCallback((data: StateModal) => {
        setModal(data)
    }, [])

    /** Save prev screen */
    const setPrevScreen = useCallback(() => {
        prevOrNextScreenRef.current = modal
    }, [modal])

    /** Save next screen */
    const setNextScreen = useCallback((data: any) => {
        prevOrNextScreenRef.current = data
    }, [])

    return {state: modal, close, open, setPrevScreen, setNextScreen, prevScreen: prevOrNextScreenRef.current}
}
