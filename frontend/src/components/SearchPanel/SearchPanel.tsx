import React, {useCallback, useEffect, useState} from 'react'
import PanelParams from "../PanelParams/PanelParams"
import SearchInput from "../UI/Inputs/SearchInput/SearchInput"
import AddButton from "../UI/Buttons/AddButton/AddButton"
import {useModalContext} from "../../context/modal-desk/context"
import {ModalType} from "../../costansts/type-modal"
import {useSortableTableContext} from "../../context/sortable-table/context"
import {useStateContext} from "../../context/state/context"
import {shortenString} from "../../utils/shorten-string"
import './style.css'

const SearchPanel: React.FC = () => {
	const {state} = useStateContext()
	const sortParams = useSortableTableContext()
	const {open} = useModalContext() ?? {}
	const [showParams, setShowParams] = useState<boolean>(false)

	useEffect(() => {
		showParams && setShowParams(false)
	}, [sortParams?.value])

	const onPressAdd = useCallback(() => {
		open?.({type: ModalType.AddEditClient, data: {isNew: true}})
	}, [])

	return <div className='wrapper-search-filter'>
		<div className='container _container'>
			<div className='search-input-wrapper'>
				<SearchInput
					value={sortParams?.value}
					setValue={sortParams?.setValue}
					placeholder={`${shortenString(sortParams?.radioValue.name ?? '', 5)} to search...`}
				/>
			</div>
			<div className='panel-input-wrapper'>
				<PanelParams
					radioValue={sortParams?.radioValue ?? undefined}
					tabValue={sortParams?.tabValue}
					setRadioValue={sortParams?.setRadioValue}
					setTabValue={sortParams?.setTabValue}
					showParams={showParams}
					setShowParams={setShowParams}
				/>
			</div>
			{state.isAuthenticated && <div className='add-button'>
				<AddButton callback={onPressAdd}/>
			</div>}
		</div>
	</div>
}

export default SearchPanel
