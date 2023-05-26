import React from "react";
import useModal from "../../hooks/use-modal";
import { ModalContext } from "./context";
import {ProviderProps} from "../../models/context/app-context";

function ModalProvider ({ children }: ProviderProps) {
    const modal = useModal()
    return (
        <ModalContext.Provider value={modal}>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider
