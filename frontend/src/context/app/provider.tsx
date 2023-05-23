import React, {ReactNode} from "react";
import {AppContext} from "./context";
import useApp from '../../hooks/use-app'
import {AppContextValue} from "./type";
import useModal from "../../hooks/use-modal";
import {ModalContext} from "../modal-desk/context";

interface ProviderProps {
    children: ReactNode;
}

function AppProvider({children}: ProviderProps) {
    const app = useApp()
    const appContextValue: AppContextValue = {...app};
    return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
}

function AppWrapper({children}: ProviderProps) {
    const modal = useModal()
    return <ModalContext.Provider value={modal}>
        <AppProvider>{children}</AppProvider>
    </ModalContext.Provider>
}

export default AppWrapper
