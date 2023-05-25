import React from 'react';
import './style.css'

interface ItemProps {
    item: any
    selectedOption?: any
    handleChange: (value: any) => void
}

const Item = ({item, selectedOption, handleChange}: ItemProps) => {
    return <div
        onClick={() => handleChange(item)}
        className={`tab-item ${selectedOption.id === item.id && 'tab-item_active' || ''} `}>
        <img alt='icon' className='arrow-down' src={require('../../../../assets/image/arrow.png')} />
        <span className='tab-name'>{item.name}</span>
    </div>
}

interface TabGroupProps {
    options: Array<any>
    selectedOption?: any
    handleChange: (value: any) => void
}


const TabGroup = ({options, selectedOption, handleChange}: TabGroupProps) => {
    return (
        <div className='container-tab'>
            {options.map((item) => <Item key={item.id} item={item} selectedOption={selectedOption}
                                         handleChange={handleChange}/>)}
        </div>
    );
};

export default TabGroup;
