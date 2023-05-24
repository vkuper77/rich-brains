import ModalProvider from "./modal-desk/provider";
import React, {ReactNode} from "react";
import AppProvider from "./app/provider";
import StateProvider from "./state/provider";
import SortableProvider from "./sortable-table/provider";

interface ProviderProps {
    children: ReactNode;
}

function AppWrapper({children}: ProviderProps) {
    return (
        <StateProvider>
            <ModalProvider>
                <AppProvider>
                    <SortableProvider>
                        {children}
                    </SortableProvider>
                </AppProvider>
            </ModalProvider>
        </StateProvider>)

}

export default AppWrapper
