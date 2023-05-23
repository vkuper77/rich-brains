import React from 'react';
import './styles.css'
import {useModalContext} from "../../context/modal-desk/context";
import {ModalType} from "../../costansts/type-modal";

const SignInButton = () => {
    const {open} = useModalContext()
    return <div className='button' onClick={() => {
        open({type: ModalType.SignIn, data: {}})
    }}>
        <img alt='icon' className='icon' src={require('../../assets/image/log-in.png')}/>
        <span>Sign in</span>
    </div>
}

interface HeaderProps {
    routeName?: string
}

const Header = ({routeName = 'Clients'}: HeaderProps) => {
    return (
        <>
            <div className='wrapper'>
                <div className='container _content'>
                    <div className='logo'>
                        <img alt='logo' src={require('../../assets/image/logo-large.png')}/>
                        <img alt='logo' src={require('../../assets/image/logo-small.png')}/>
                    </div>
                    <div className='main'>
                        <h2 className='route'>{routeName}</h2>
                        <SignInButton/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
