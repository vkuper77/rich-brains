import React, {ReactNode} from "react";
import {AppContext} from "./context";
import useApp from '../../hooks/use-app'
import {AppContextValue} from "./type";

interface ProviderProps {
    children: ReactNode;
}

function AppProvider({children}: ProviderProps) {
    const app = useApp()
    const appContextValue: AppContextValue = {...app};
    return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
}

export default AppProvider


