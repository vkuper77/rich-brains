import {createContext, useContext} from 'react'
import {ModalContextValue} from "../../models/context/modal-context"

export const ModalContext = createContext<ModalContextValue | null>(null)
export const useModalContext = () => useContext(ModalContext)
