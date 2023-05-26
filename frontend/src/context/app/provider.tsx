import React from "react";
import {AppContext} from "./context";
import useApp from '../../hooks/use-app'
import {AppContextValue, ProviderProps} from "../../models/context/app-context";

function AppProvider({children}: ProviderProps) {
    const app = useApp()
    const appContextValue: AppContextValue = {...app};
    return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
}

export default AppProvider


