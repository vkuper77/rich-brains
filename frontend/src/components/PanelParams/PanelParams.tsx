import React, {useState} from 'react';
import RadioButtonGroup from "../UI/Inputs/RadioButtonGroup/RadioButtonGroup";
import {OPTIONS_FILTER, TAB_OPTIONS} from "../../costansts/type-filters";
import TabGroup from "../UI/Buttons/Tab/TabGroup";
import './style.css'

const PanelParams = ({radioValue, setRadioValue, tabValue, setTabValue}: any) => {
    const [showParams, setShowParams] = useState(false)
    return (
        <div className='panel-container'>

            {/* Label */}
            <div
                onClick={() => setShowParams(p => !p)}
                className={`sort-label ${showParams ? 'sort-label_focus' : ''}`}
            >
                <div style={{display: 'flex'}}>
                    <img alt='icon' className='sort-icon' src={require('../../assets/image/sort.png')}/>
                    <div className='text-container'>
                        <span className='placeholder'>Sort by:</span>
                        <span className='sort-name'>{radioValue.name}</span>
                    </div>
                </div>
                <img alt='icon' className='arrow-icon' src={require('../../assets/image/arrow-down.png')}/>
            </div>

            {/* Plate params */}
            {showParams && <div className='container-params'>
                <RadioButtonGroup
                    options={OPTIONS_FILTER}
                    selectedOption={radioValue}
                    handleChange={setRadioValue}
                />
                <div style={{marginTop: '10px'}}>
                    <TabGroup options={TAB_OPTIONS} selectedOption={tabValue} handleChange={setTabValue}/>
                </div>
            </div>}

        </div>
    );
};

export default PanelParams;
