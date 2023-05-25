import React, {useCallback, useState} from 'react';
import PanelParams from "../PanelParams/PanelParams";
import SearchInput from "../UI/Inputs/SearchInput/SearchInput";
import './style.css'
import {OPTIONS_FILTER, TAB_OPTIONS} from "../../costansts/type-filters";
import AddButton from "../UI/Buttons/AddButton/AddButton";
import {useStateContext} from "../../context/state/context";
import {useModalContext} from "../../context/modal-desk/context";
import {ModalType} from "../../costansts/type-modal";

const SearchPanel = () => {
    const {state} = useStateContext()
    const [value, setValue] = useState('')
    const [radioValue, setRadioValue] = useState(OPTIONS_FILTER[0])
    const [tabValue, setTabValue] = useState(TAB_OPTIONS[0])
    const { open} = useModalContext()

    const onPressAdd = useCallback(() => {
        open({type: ModalType.AddEditClient, data: {isNew: true}})
    }, [])

    return <div className='wrapper-search-filter'>
        <div className='container _container'>
            <SearchInput
                value={value}
                setValue={setValue}
                placeholder={'Type to search...'}
            />
            <PanelParams
                radioValue={radioValue}
                tabValue={tabValue}
                setRadioValue={setRadioValue}
                setTabValue={setTabValue}
            />
            {state.isAuthenticated && <div style={{position: 'absolute', right: '-97px', top: '0px'}}>
                <AddButton callback={onPressAdd}/>
            </div>}
        </div>
    </div>

};

export default SearchPanel;
