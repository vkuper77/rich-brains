import ModalProvider from "./modal-desk/provider";
import React from "react";
import AppProvider from "./app/provider";
import StateProvider from "./state/provider";
import SortableProvider from "./sortable-table/provider";
import {ProviderProps} from "../models/context/app-context";

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
