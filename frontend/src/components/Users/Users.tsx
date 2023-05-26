import React, {useCallback} from 'react';
import Card from "../Card/Card";
import './style.css'
import {useStateContext} from "../../context/state/context";
import {useModalContext} from "../../context/modal-desk/context";
import {ModalType} from "../../costansts/type-modal";
import {Client} from "../../state/types";
import {useSortableTableContext} from "../../context/sortable-table/context";

const Users: React.FC = () => {
    const { state } = useStateContext()
    const { open, setNextScreen} = useModalContext()
    const sortParams = useSortableTableContext()

    const onPressCard = useCallback((client: Client) => {
        if(!state.isAuthenticated) {
            open({type: ModalType.SignIn})
            setNextScreen({type: ModalType.PreviewClient, data: client})
            return
        }
        open({type: ModalType.PreviewClient, data: client})
    }, [state])

    return (
        <div className='users-wrapper'>
            <div className='users-container _container'>
                {sortParams?.sortData.map((item) => <Card callback={onPressCard} key={item.id} user={item}/>)}
            </div>
        </div>
    );
};

export default Users;
