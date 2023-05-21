import React, {useState} from 'react';
import PanelParams from "../PanelParams/PanelParams";
import SearchInput from "../UI/Inputs/SearchInput/SearchInput";
import './style.css'
import {OPTIONS_FILTER, TAB_OPTIONS} from "../../costansts/type-filters";

const SearchPanel = () => {
    const [value, setValue] = useState('')
    const [radioValue, setRadioValue] = useState(OPTIONS_FILTER[0])
    const [tabValue, setTabValue] = useState(TAB_OPTIONS[0])

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
        </div>
    </div>

};

export default SearchPanel;
