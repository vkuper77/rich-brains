import React from 'react';
import './style.css'

interface MainButtonProps {
    type?: "button" | "submit" | "reset" | undefined
    text?: string
    styleButton?: 'main-button' | 'secondary-button'
    callback?: () => void
}

const MainButton = ({type = 'button', text = '', styleButton = 'main-button', callback = () => undefined}: MainButtonProps) => {
    return <button onClick={callback} className={`button-custom ${styleButton}`} type={type}>{text}</button>
};

export default MainButton;
