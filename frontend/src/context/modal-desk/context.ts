import {createContext, useContext} from 'react'

export const ModalContext = createContext<any>(null);
export const useModalContext = () => useContext(ModalContext)
