import React from 'react'
import {SortableTableContext} from "./context"
import useSortableTable from "../../hooks/use-sortable-table"
import {ProviderProps} from "../../models/context/app-context"
import {SortContextValue} from "../../models/context/sort-context"

function SortableProvider({children}: ProviderProps) {
	const value: SortContextValue = useSortableTable()
	return <SortableTableContext.Provider value={value}>{children}</SortableTableContext.Provider>
}

export default SortableProvider
