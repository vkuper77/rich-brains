import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useAppContext} from "../../context/app/context";
import Input from "../UI/Inputs/Input/Input";
import MainButton from "../UI/Buttons/MainButton/MainButton";
import './style.css'

interface SignInProps {
    callback: () => void
}

const SignIn = ({callback}: SignInProps) => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPass, setShowPass] = useState<boolean>(false)
    const app = useAppContext()

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event: FormEvent) => {
        if (!username.length || !username.length) return
        event.preventDefault()
        app!.signIn()
    }

    return (
        <div className='sign-wrapper'>
            <div onClick={callback} className='cross-icon'>
                <img alt='cross' src={require('../../assets/image/close.png')}/>
            </div>
            <h2 className='sign-title'>Sign in</h2>
            <form action={'/'} onSubmit={handleSubmit} className='sign-form'>
                <div style={{marginBottom: '20px'}}>
                    <Input
                        value={username}
                        handleChange={handleUsernameChange}
                        type='text'
                        placeholder='login'
                    />
                </div>
                <div style={{marginBottom: '20px', position: 'relative'}}>
                    <Input
                        value={password}
                        handleChange={handlePasswordChange}
                        type={showPass ? 'text' : 'password'}
                        placeholder='password'
                    />
                    <div onClick={() => setShowPass(p => !p)} className='show-icon'>
                        <img alt='show-icon' src={require('../../assets/image/show.png')}/>
                    </div>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <MainButton type='submit' text='Sign in'/>
                </div>
                <MainButton type='button' text='Close' styleButton='secondary-button' callback={callback}/>
            </form>
        </div>
    );
};

export default SignIn;
