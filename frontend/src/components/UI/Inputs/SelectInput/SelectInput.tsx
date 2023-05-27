import React, {ChangeEvent} from "react";
import {COUNTRY} from "../../../../costansts/constants-input";
import './style.css'

interface SelectInputProps {
    value: string
    placeholder: string
    handleChange: (v: ChangeEvent<HTMLSelectElement>) => void
    data: { name: string, id: number }[]
    style?: React.CSSProperties
}

const SelectInput: React.FC<SelectInputProps> = ({style, placeholder = '', value, handleChange, data}) => {
    return (
        <div className='input-select-wrapper'>
            <select required className='input-select' style={style} value={value} onChange={handleChange}>
                {placeholder && <option value="">{placeholder}</option>}
                {data.map((item) => (
                    <option key={item.id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
            <img alt='arrow-icon' className='icon-arrow-select'
                 src={require('../../../../assets/image/arrow-down.png')}/>
        </div>
    );
};

export default SelectInput;
