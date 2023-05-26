import React, {useCallback} from 'react';
import Card from "../Card/Card";
import {useStateContext} from "../../context/state/context";
import {useModalContext} from "../../context/modal-desk/context";
import {ModalType} from "../../costansts/type-modal";
import {Client} from "../../state/types";
import {useSortableTableContext} from "../../context/sortable-table/context";
import {ButtonSmallCardType} from "../../costansts/buttons-small";
import './style.css'

const Users: React.FC = () => {
    const {state} = useStateContext()
    const {open, setNextScreen} = useModalContext()
    const sortParams = useSortableTableContext()

    const onPressCard = useCallback((client: Client) => {
        if (!state.isAuthenticated) {
            open({type: ModalType.SignIn})
            setNextScreen({type: ModalType.PreviewClient, data: client})
            return
        }
        open({type: ModalType.PreviewClient, data: client})
    }, [state])

    const onPressButtonsSmall = useCallback((buttonId: number, client: Client) => {
        if (buttonId === ButtonSmallCardType.Delete) {
            open({type: ModalType.DeleteClient, data: {id: client.id}})
        } else {
            open({type: ModalType.AddEditClient, data: {...client, isNew: false}})
        }
    }, [])

    return (
        <div className='users-wrapper'>
            <div className='users-container _container'>
                {sortParams?.sortData.map((item) => <Card isAuthenticated={state.isAuthenticated} callback={onPressCard}
                                                          secondaryCallback={onPressButtonsSmall}
                                                          key={item.id} user={item}/>)}
            </div>
        </div>
    );
};

export default Users;
