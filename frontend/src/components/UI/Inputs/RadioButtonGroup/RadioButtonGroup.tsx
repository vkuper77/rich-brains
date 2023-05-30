import React from 'react'
import './style.css'
import {FilterOption} from "../../../../costansts/type-filters"

interface ItemsProps {
    item: FilterOption
    selectedOption: FilterOption | null
    defaultSelected: FilterOption
    handleChange?: (value: FilterOption) => void
}

const Items: React.FC<ItemsProps> = ({item, selectedOption = null, handleChange = () => undefined, defaultSelected}) => {
	return <label className='label'>
		<input
			type="radio"
			className='radio'
			value={item.name}
			checked={(selectedOption ?? defaultSelected).id === item.id}
			onChange={() => handleChange(item)}
		/>
		<span className='name'>{item.name}</span>
	</label>

}

interface RadioButtonGroupProps {
    options?: Array<FilterOption>,
    selectedOption?: FilterOption | null
    handleChange: (value: FilterOption) => void
}

const RadioButtonGroup = (
	{
		options = [],
		handleChange = () => undefined,
		selectedOption = null
	}: RadioButtonGroupProps
) => {
	return (
		<div className='container-radio'>
			{options.map((itm) => (
				<Items
					key={itm.id}
					item={itm}
					selectedOption={selectedOption}
					handleChange={handleChange}
					defaultSelected={options[0]}
				/>
			))}
		</div>
	)
}

export default RadioButtonGroup
