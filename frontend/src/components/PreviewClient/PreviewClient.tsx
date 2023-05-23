import React from 'react';
import '../Card/style.css'
import '../SignOut/style.css'
import './style.css'
import EditButton from "../UI/Buttons/EditButton/EditButton";
import DeleteButton from "../UI/Buttons/DeleteButton/DeleteButton";
import {useModalContext} from "../../context/modal-desk/context";
import {ModalType} from "../../costansts/type-modal";

interface PreviewClientProps {
    callback: () => void
}

const PreviewClient = ({callback}: PreviewClientProps) => {
    const {open, setPrevScreen} = useModalContext()
    return (
        <div className='preview-wrapper'>
            <div onClick={callback} className='cross-icon'>
                <img alt='cross' src={require('../../assets/image/close.png')}/>
            </div>
            <div className='preview-container'>
                <div className='preview-container-buttons'>
                    <EditButton callback={() => {
                        setPrevScreen()
                        open({type: ModalType.AddEditClient, data: null})
                    }}/>
                    <DeleteButton callback={() => {
                        setPrevScreen()
                        open({type: ModalType.DeleteClient, data: null})
                    }}/>
                </div>
                <img alt='avatar' className='preview-avatar' src={require('../../assets/image/avatar.png')}/>
                <h3 className="preview-title">Arlene McCoy</h3>
                <div className="info">
                    <img
                        alt='icon'
                        className='card-icon'
                        src={require('../../assets/image/map-pin.png')}
                    />
                    <span>France</span>
                </div>
                <div className="info">
                    <img
                        alt='icon'
                        className='card-icon'
                        src={require('../../assets/image/telephone.png')}
                    />
                    <span>+44 117 496 0238</span>
                </div>
                <div className="info">
                    <img
                        alt='icon'
                        className='card-icon'
                        src={require('../../assets/image/calendar.png')}
                    />
                    <span>13.04.2001</span>
                </div>
                <button onClick={callback} type='button' className='preview-button'>Close</button>
            </div>
        </div>
    );
};

export default PreviewClient;
