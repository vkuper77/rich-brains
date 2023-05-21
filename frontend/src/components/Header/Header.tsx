import React, {useCallback} from 'react';
import './styles.css'

const SignInButton = ({signIn}: { signIn: () => void }) => {
    return <div className='button' onClick={signIn}>
        <img alt='icon' className='icon' src={require('../../assets/image/log-in.png')}/>
        <span>Sign in</span>
    </div>
}

interface HeaderProps {
    routeName?: string
}

const Header = ({routeName = 'Clients'}: HeaderProps) => {
    const signIn = useCallback(() => {
    }, [])
    return (
        <div className='wrapper'>
            <div className='container _content'>
                <div className='logo'>
                    <img alt='logo' src={require('../../assets/image/logo-large.png')}/>
                    <img alt='logo' src={require('../../assets/image/logo-small.png')}/>
                </div>
                <div className='main'>
                    <h2 className='route'>{routeName}</h2>
                    <SignInButton signIn={signIn}/>
                </div>
            </div>
        </div>
    );
};

export default Header;
