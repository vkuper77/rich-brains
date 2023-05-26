import React from 'react';
import './style.css'
import {FilterOption} from "../../../../costansts/type-filters";

interface ItemProps {
    item: FilterOption
    selectedOption: FilterOption
    handleChange: (value: FilterOption) => void
}

const Item: React.FC<ItemProps> = ({item, selectedOption, handleChange}) => {
    return <div
        onClick={() => handleChange(item)}
        className={`tab-item ${selectedOption.id === item.id && 'tab-item_active' || ''} `}>
        <img alt='icon' className='arrow-down' src={require('../../../../assets/image/arrow.png')}/>
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
    );
};

export default TabGroup;
