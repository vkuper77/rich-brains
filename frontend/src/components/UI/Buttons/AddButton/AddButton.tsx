import React from 'react';
import './style.css'

interface AddButtonProps {
    callback(): void
}

const AddButton: React.FC<AddButtonProps> = ({callback}) => {
    return <div onClick={callback} className='container-button'>
        <img style={{width: '20px', height: '20px'}} alt='icon-plus'
             src={require('../../../../assets/image/plus.png')}/>
    </div>
};

export default AddButton;
