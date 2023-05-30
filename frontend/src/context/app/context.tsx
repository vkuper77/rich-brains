import {createContext, useContext} from 'react'
import {AppContextValue} from "../../models/context/app-context"

export const AppContext = createContext<AppContextValue | null>(null)
export const useAppContext = () => useContext(AppContext)
