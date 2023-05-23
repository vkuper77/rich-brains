import React from 'react';
import '../DeleteButton/style.css'

const EditButton = () => {
    return (
        <div className='button-container'>
            <img alt='icon' src={require('../../../../assets/image/edit.png')}/>
            <span style={{color: '#313131'}}>Edit profile</span>
        </div>
    );
};

export default EditButton;
