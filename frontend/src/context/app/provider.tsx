import {ReactNode} from "react";
import {AppContext} from "./context";
import useApp from '../../hooks/use-app'
import {AppContextValue} from "./type";

interface AppProviderProps {
    children: ReactNode;
}

export default function AppProvider({children}: AppProviderProps) {
    const app = useApp()
    const appContextValue: AppContextValue = { ...app };
    return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
}
