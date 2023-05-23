import React from 'react';
import MainButton from "../UI/Buttons/MainButton/MainButton";
import './../SignOut/style.css'
import {useAppContext} from "../../context/app/context";

interface DeleteOverlayProps {
    callback: () => void
}

const DeleteOverlay = ({callback = () => undefined}: DeleteOverlayProps) => {
    const app = useAppContext()
    return (
        <div className='sign-out-wrapper'>
            <div onClick={callback} className='cross-icon'>
                <img alt='cross' src={require('../../assets/image/close.png')}/>
            </div>
            <div className='sign-out-container'>
                <h2 className='sign-out-title'>Delete</h2>
                <p className='sign-out-text'>Are you sure you want to delete client?</p>
                <div style={{marginBottom: '20px'}}>
                    <MainButton
                        type='button'
                        text='Yes, delete'
                        styleButton='main-danger'
                        callback={app?.deleteClient}
                    />
                </div>
                <MainButton type='button' text='No, close' styleButton='secondary-button' callback={callback}/>
            </div>
        </div>
    );
};

export default DeleteOverlay;
