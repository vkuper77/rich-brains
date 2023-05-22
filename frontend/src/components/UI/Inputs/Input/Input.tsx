import React, {ChangeEvent} from 'react';
import './style.css'

interface InputProps {
    id?: string
    type?: string
    value?: string
    placeholder?: string
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({type = '', placeholder, value = '', id = '', handleChange = () => undefined}: InputProps) => {
    return (
        <input
            className="input-custom"
            id={id}
            type={type}
            value={value}
            onChange={handleChange}
            required
            placeholder={placeholder}
        />
    );
};

export default Input;
