import React from 'react';
import MainButton from "../UI/Buttons/MainButton/MainButton";
import './style.css'
import {useAppContext} from "../../context/app/context";

interface SignOutProps {
    callback: () => void
}

const SignOut = ({callback}: SignOutProps) => {
    const app = useAppContext()
    return (
        <div className='sign-out-wrapper'>
            <div onClick={callback} className='cross-icon'>
                <img alt='cross' src={require('../../assets/image/close.png')}/>
            </div>
            <div className='sign-out-container'>
                <h2 className='sign-out-title'>Sign out</h2>
                <p className='sign-out-text'>Are you sure you want to sign out?</p>
                <div style={{marginBottom: '20px'}}>
                    <MainButton type='button' text='Yes, sign out' callback={app?.signOut}/>
                </div>
                <MainButton type='button' text='No, close' styleButton='secondary-button' callback={callback}/>
            </div>
        </div>
    );
};

export default SignOut;
