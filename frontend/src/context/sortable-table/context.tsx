import {createContext, useContext} from 'react'

export const SortableTableContext = createContext(null);
export const useSortableTableContext = () => useContext(SortableTableContext)
