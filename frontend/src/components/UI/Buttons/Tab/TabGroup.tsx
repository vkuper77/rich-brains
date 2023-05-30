import React from 'react'
import './style.css'
import {FilterOption, TypeOptions} from "../../../../costansts/type-filters"

interface ItemProps {
    item: FilterOption
    selectedOption: FilterOption
    handleChange: (value: FilterOption) => void
}

const Item: React.FC<ItemProps> = ({item, selectedOption, handleChange}) => {
	const icon = selectedOption.id === item.id ? require(`../../../../assets/image/arrow-primary.png`) : require(`../../../../assets/image/arrow.png`)
	return <div
		className={`tab-item ${selectedOption.id === item.id && 'tab-item_active' || ''}`}
		onClick={() => handleChange(item)}
	>
		<img alt='icon' className='arrow-down' style={{rotate: item.id === TypeOptions.Asc ? '180deg' : '0'}}
			src={(icon)}/>
		<span className='tab-name'>{item.name}</span>
	</div>
}

interface TabGroupProps {
    options: Array<FilterOption>
    selectedOption?: any
    handleChange: (value: FilterOption) => void
}

const TabGroup: React.FC<TabGroupProps> = ({options, selectedOption, handleChange}) => {
	return (
		<div className='container-tab'>
			{options.map((item) => <Item key={item.id} item={item} selectedOption={selectedOption}
				handleChange={handleChange}/>)}
		</div>
	)
}

export default TabGroup
