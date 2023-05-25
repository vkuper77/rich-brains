import React, {useCallback} from 'react';
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
    const {state, open, setPrevScreen} = useModalContext()

    const onPressEdit = useCallback(() => {
        setPrevScreen()
        open({type: ModalType.AddEditClient, data: {...state.data, isNew: false}})
    }, [])

    const onPressDelete = useCallback(() => {
        setPrevScreen()
        open({type: ModalType.DeleteClient, data: {id: state.data.id}})
    }, [])

    return (
        <div className='preview-wrapper'>
            <div onClick={callback} className='cross-icon'>
                <img alt='cross' src={require('../../assets/image/close.png')}/>
            </div>
            <div className='preview-container'>
                <div className='preview-container-buttons'>
                    <EditButton callback={onPressEdit}/>
                    <DeleteButton callback={onPressDelete}/>
                </div>
                <img alt='avatar' className='preview-avatar' src={require('../../assets/image/avatar.png')}/>
                <h3 className="preview-title">{`${state.data.name} ${state.data.surname}`}</h3>
                <div className="info">
                    <img
                        alt='icon'
                        className='card-icon'
                        src={require('../../assets/image/map-pin.png')}
                    />
                    <span>{state.data.country}</span>
                </div>
                <div className="info">
                    <img
                        alt='icon'
                        className='card-icon'
                        src={require('../../assets/image/telephone.png')}
                    />
                    <span>{state.data.phone}</span>
                </div>
                <div className="info">
                    <img
                        alt='icon'
                        className='card-icon'
                        src={require('../../assets/image/calendar.png')}
                    />
                    <span>{state.data.age}</span>
                </div>
                <button onClick={callback} type='button' className='preview-button'>Close</button>
            </div>
        </div>
    );
};

export default PreviewClient;
