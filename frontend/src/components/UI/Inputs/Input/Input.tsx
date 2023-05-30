import React, {ChangeEvent} from 'react'
import './style.css'

interface InputProps {
    id?: string
    type?: string
    value?: string
    placeholder?: string
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
    style?: React.CSSProperties
}

const Input: React.FC<InputProps> = ({type = '', placeholder, value = '', id = '', handleChange = () => undefined, style = {}}) => {
	return (
		<input
			className="input-custom"
			id={id}
			type={type}
			value={value}
			onChange={handleChange}
			required
			placeholder={placeholder}
			style={style}
		/>
	)
}

export default Input
