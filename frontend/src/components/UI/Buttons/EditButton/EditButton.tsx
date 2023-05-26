import React from 'react';
import '../DeleteButton/style.css'

interface EditButtonProps {
    callback: () => void
}

const EditButton: React.FC<EditButtonProps> = ({callback}) => {
    return (
        <div onClick={callback} className='button-container'>
            <img alt='icon' src={require('../../../../assets/image/edit.png')}/>
            <span style={{color: '#313131'}}>Edit profile</span>
        </div>
    );
};

export default EditButton;
