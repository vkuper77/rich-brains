import ModalProvider from "./modal-desk/provider";
import React, {ReactNode} from "react";
import AppProvider from "./app/provider";
import StateProvider from "./state/provider";

interface ProviderProps {
    children: ReactNode;
}

function AppWrapper({children}: ProviderProps) {
    return (
        <StateProvider>
            <ModalProvider>
                <AppProvider>{children}</AppProvider>
            </ModalProvider>
        </StateProvider>)

}

export default AppWrapper
