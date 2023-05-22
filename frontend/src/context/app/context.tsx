import {createContext, useContext} from 'react'
import {AppContextValue} from "./type";

export const AppContext = createContext<AppContextValue | null>(null);
export const useAppContext = () => useContext(AppContext)
