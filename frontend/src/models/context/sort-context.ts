import { Client } from "../../state/types"
import {FilterOption} from "../../costansts/type-filters"

export interface SortContextValue {
    sortData: Client[]
    value: string
    setValue(s: string): void
    radioValue: FilterOption
    setRadioValue(v: FilterOption): void
    tabValue: FilterOption
    setTabValue(v: FilterOption): void
}
