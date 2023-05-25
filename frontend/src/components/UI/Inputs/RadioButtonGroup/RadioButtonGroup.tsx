import React from 'react';
import './style.css'

type ItemOptions = { id: number, name: string }

interface ItemsProps {
    item: ItemOptions
    selectedOption: ItemOptions | null
    defaultSelected: ItemOptions
    handleChange?: (value: ItemOptions) => void
}

const Items = ({item, selectedOption = null, handleChange = () => undefined, defaultSelected}: ItemsProps) => {
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
    options?: Array<ItemOptions>,
    selectedOption?: ItemOptions | null
    handleChange: (value: ItemOptions) => void
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
    );
}

export default RadioButtonGroup;
