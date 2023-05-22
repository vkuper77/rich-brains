import React, {useCallback, useState} from 'react';
import Modal from "../UI/Modal/Modal";
import SignIn from "../SignIn/SignIn";
import './styles.css'

const SignInButton = ({callback}: { callback: () => void }) => {
    return <div className='button' onClick={callback}>
        <img alt='icon' className='icon' src={require('../../assets/image/log-in.png')}/>
        <span>Sign in</span>
    </div>
}

interface HeaderProps {
    routeName?: string
}

const Header = ({routeName = 'Clients'}: HeaderProps) => {
    const [showAuth, setShowAuth] = useState<boolean>(false)

    const toggle = useCallback(() => {
        setShowAuth(p => !p)
    }, [])

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
                        <SignInButton callback={toggle}/>
                    </div>
                </div>
            </div>
            <Modal isOpen={showAuth} onClose={toggle}>
                <SignIn/>
            </Modal>
        </>
    );
};

export default Header;
