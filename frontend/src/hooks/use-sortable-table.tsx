import React, {useMemo, useState} from 'react'
import {useStateContext} from "../context/state/context"
import {FilterOption, OPTIONS_FILTER, TAB_OPTIONS, TypeOptions} from "../costansts/type-filters"
import {filterSearch} from "../utils/filter-search"

const useSortableTable = () => {
	const {state} = useStateContext()
	const [value, setValue] = useState<string>('')
	const [radioValue, setRadioValue] = useState<FilterOption>(OPTIONS_FILTER[0])
	const [tabValue, setTabValue] = useState<FilterOption>(TAB_OPTIONS[0])

	const sortData = useMemo(() => {
		const sort = [...state.clients].sort((a, b) => {
			if (tabValue.id === TypeOptions.Asc) {
				switch (radioValue.id) {
				case TypeOptions.Name:
					return a.name.localeCompare(b.name)
				case TypeOptions.Date:
					return a.date.localeCompare(b.date)
				case TypeOptions.Country:
					return a.country.localeCompare(b.country)
				default:
					return 0
				}
			} else if (tabValue.id === TypeOptions.Desc) {
				switch (radioValue.id) {
				case TypeOptions.Name:
					return b.name.localeCompare(a.name)
				case TypeOptions.Date:
					return String(b.date).localeCompare(String(a.date))
				case TypeOptions.Country:
					return b.country.localeCompare(a.country)
				default:
					return 0
				}
			}
			return 0
		})
		return filterSearch(sort, radioValue.key, value)
	}, [value, state.clients, radioValue.id, tabValue.id])

	return {sortData, value, setValue, radioValue, setRadioValue, tabValue, setTabValue}
}

export default useSortableTable
