import React from 'react';
import {SortableTableContext} from "./context";
import useSortableTable from "../../hooks/use-sortable-table";
import {ProviderProps} from "../../models/context/app-context";

function SortableProvider({children}: ProviderProps) {
    const params = useSortableTable()
    // @ts-ignore
    return <SortableTableContext.Provider value={params}>{children}</SortableTableContext.Provider>
}

export default SortableProvider;
