import React, {useEffect, useRef, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './style.css'
import {initialDate} from "../../../../utils/formatted-date"
import {MAX_DATE} from "../../../../costansts/constants-input"

interface InputDateProps {
    value: number | null
    setValue: (v: number) => void
}

const InputDate: React.FC<InputDateProps> = ({value, setValue = () => undefined}) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null)
	const [show, setShow] = useState<boolean>(false)
	const refDate = useRef<DatePicker>(null)

	useEffect(() => {
		handleDateChange(value ? initialDate(value) : MAX_DATE)
	}, [])

	const handleDateChange = (date: Date) => {
		setValue(new Date().getFullYear() - date!.getFullYear())
		setSelectedDate(date)
		setShow(false)
	}

	return (
		<div className="wrapper-data-piker">
			<img className='icon-calendar' alt='icon-date' src={require('../../../../assets/image/date-picker.png')}/>
			<DatePicker
				ref={refDate}
				selected={selectedDate}
				open={show}
				onChange={handleDateChange}
				dateFormat="dd.MM.yyyy"
				id="date-input"
				maxDate={MAX_DATE}
				onFocus={() => setShow(true)}
				onClickOutside={() => setShow(false)}
				className='data-piker'
			/>
		</div>
	)
}

export default InputDate
