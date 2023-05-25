import React, {ReactNode} from "react";
import useModal from "../../hooks/use-modal";
import { ModalContext } from "./context";

interface ProviderProps {
    children: ReactNode;
}

function ModalProvider ({ children }: ProviderProps) {
    const modal = useModal()
    return (
        <ModalContext.Provider value={modal}>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider
