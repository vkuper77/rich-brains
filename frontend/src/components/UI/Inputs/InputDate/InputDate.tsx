import React, {useRef, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './style.css'
import {initialDate} from "../../../../utils/formatted-date";

interface InputDateProps {
    value: number | null
    setValue: (v: number) => void
}

const MAX_DATE = new Date();
MAX_DATE.setFullYear(MAX_DATE.getFullYear() - 1)

const InputDate: React.FC<InputDateProps> = ({value, setValue = () => undefined}) => {
    const [selectedDate, setSelectedDate] = useState<Date>(value ? initialDate(value) : MAX_DATE);
    const [show, setShow] = useState<boolean>(false);
    const refDate = useRef<DatePicker>(null)

    const handleDateChange = (date: Date) => {
        setValue(new Date().getFullYear() - date!.getFullYear())
        setSelectedDate(date);
        setShow(false)
    };

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
    );
};

export default InputDate;
