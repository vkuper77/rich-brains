import {createContext, useContext} from 'react'
import {SortContextValue} from "../../models/context/sort-context";

export const SortableTableContext = createContext<SortContextValue | null>(null);
export const useSortableTableContext = () => useContext(SortableTableContext)
