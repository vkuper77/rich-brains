import React, {useCallback} from 'react';
import './styles.css'
import {useModalContext} from "../../context/modal-desk/context";
import {ModalType} from "../../costansts/type-modal";
import {useStateContext} from "../../context/state/context";
import {useAppContext} from "../../context/app/context";

const User: React.FC<{ name: string }> = ({name}) => {
    const {open} = useModalContext()

    const handleImageClick = useCallback(() => {
        open({type: ModalType.SignOut});
    }, []);
    //todo разобраться почему не срабатывает клик в мобильной версии
    return <div onClick={handleImageClick} className='user-container'>
        <img style={{width: '16px', height: '16px', marginRight: '7px'}} alt='icon'
             src={require('../../assets/image/user.png')}/>
        <span className='user-container-title'>{name}</span>
        <img style={{width: '16px', height: '16px'}} alt='icon' src={require('../../assets/image/arrow-down.png')}/>
    </div>

}

const SignInButton: React.FC = () => {
    const {open} = useModalContext()
    return <div className='button' onClick={() => {
        open({type: ModalType.SignIn})
    }}>
        <img alt='icon' className='icon' src={require('../../assets/image/log-in.png')}/>
        <span>Sign in</span>
    </div>
}

interface HeaderProps {
    routeName?: string
}

const Header: React.FC<HeaderProps> = ({routeName = 'Clients'}) => {
    const {state} = useStateContext()
    const app = useAppContext()
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
                        {!app?.loading ? state.isAuthenticated ? <User name={state.user!.login}/> : <SignInButton/> :
                            <div>loading...</div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
