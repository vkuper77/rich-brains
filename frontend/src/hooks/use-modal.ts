import {useCallback, useRef, useState} from "react";
import {StateModal} from "../components/ModalDesk/ModalDesk";

const initState = {type: null, data: null}

export default function useModal() {
    const [modal, setModal] = useState<StateModal>(initState)
    const prevModalRef = useRef<StateModal>(initState);

    /**Close modal*/
    const close = useCallback(() => {
        setModal(initState)
        prevModalRef.current = initState
    }, [])

    /** Open modal */
    const open = useCallback((data: StateModal) => {
        setModal(data)
    }, [])

    /** Save prev screen */
    const setPrevScreen = useCallback(() => {
        prevModalRef.current = modal
    }, [modal])

    return {state: modal, close, open, setPrevScreen, prevScreen: prevModalRef.current}
}
