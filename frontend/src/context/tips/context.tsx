import {createContext, useContext} from 'react'

export const TipsContext = createContext<any>(null);
export const useTipsContext = () => useContext(TipsContext)
