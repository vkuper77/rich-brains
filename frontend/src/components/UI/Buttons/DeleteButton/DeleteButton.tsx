import React from 'react';
import './style.css'

const DeleteButton = () => {
    return (
        <div className='button-container'>
            <img alt='icon' src={require('../../../../assets/image/trash.png')} />
            <span>Delete client</span>
        </div>
    );
};

export default DeleteButton;
