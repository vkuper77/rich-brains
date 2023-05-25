import React, {ReactNode} from 'react';
import {SortableTableContext} from "./context";
import useSortableTable from "../../hooks/use-sortable-table";

interface ProviderProps {
    children: ReactNode;
}

function SortableProvider({children}: ProviderProps) {
    const params = useSortableTable()
    // @ts-ignore
    return <SortableTableContext.Provider value={params}>{children}</SortableTableContext.Provider>
}

export default SortableProvider;
