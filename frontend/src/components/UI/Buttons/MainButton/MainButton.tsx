import React from 'react';
import './style.css'

interface MainButtonProps {
    type?: "button" | "submit" | "reset" | undefined
    text?: string
    styleButton?: 'main-button' | 'secondary-button' | 'main-danger'
    callback?: () => void
}

const MainButton: React.FC<MainButtonProps> = ({type = 'button', text = '', styleButton = 'main-button', callback = () => undefined}) => {
    return <button onClick={callback} className={`button-custom ${styleButton}`} type={type}>{text}</button>
};

export default MainButton;
