import React, {useCallback} from 'react';
import Card from "../Card/Card";
import './style.css'
import {useStateContext} from "../../context/state/context";
import {useModalContext} from "../../context/modal-desk/context";
import {ModalType} from "../../costansts/type-modal";
import {Client} from "../../state/types";

const Users = () => {
    const { state } = useStateContext()
    const {open} = useModalContext()

    const onPressCard = useCallback((client: Client) => {
        if(!state.isAuthenticated) return
        open({type: ModalType.PreviewClient, data: client})
    }, [state])

    return (
        <div className='users-wrapper'>
            <div className='users-container _container'>
                {state.clients.map((item) => <Card callback={onPressCard} key={item.id} user={item}/>)}
            </div>
        </div>
    );
};

export default Users;
