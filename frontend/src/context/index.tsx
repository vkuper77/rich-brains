import ModalProvider from "./modal-desk/provider";
import React from "react";
import AppProvider from "./app/provider";
import StateProvider from "./state/provider";
import SortableProvider from "./sortable-table/provider";
import {ProviderProps} from "../models/context/app-context";
import TipsProvider from "./tips/provider";

function AppWrapper({children}: ProviderProps) {
    return (
        <StateProvider>
            <ModalProvider>
                <TipsProvider>
                    <AppProvider>
                        <SortableProvider>
                            {children}
                        </SortableProvider>
                    </AppProvider>
                </TipsProvider>
            </ModalProvider>
        </StateProvider>)

}

export default AppWrapper
