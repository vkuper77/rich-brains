import {StateModal} from "../../components/ModalDesk/ModalDesk"

export interface ModalContextValue {
    state: StateModal,
    close: () => void,
    open: (data: StateModal) => void,
    setPrevScreen: () => void,
    setNextScreen: (data: StateModal) => void,
    prevScreen: StateModal,
}
