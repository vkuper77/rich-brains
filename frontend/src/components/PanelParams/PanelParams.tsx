import React from 'react';
import RadioButtonGroup from "../UI/Inputs/RadioButtonGroup/RadioButtonGroup";
import {FilterOption, OPTIONS_FILTER, TAB_OPTIONS} from "../../costansts/type-filters";
import TabGroup from "../UI/Buttons/Tab/TabGroup";
import './style.css'

interface PanelParamsProps {
    radioValue: FilterOption | undefined
    setRadioValue: ((v: FilterOption) => void ) | undefined
    tabValue:FilterOption | undefined
    setTabValue: ((v: FilterOption) => void) | undefined
    showParams: boolean
    setShowParams: (v: boolean) => void
}

const PanelParams = ({radioValue, setRadioValue, tabValue, setTabValue, showParams, setShowParams }: PanelParamsProps) => {
    return (
        <div className='panel-container'>
            {/* Label */}
            <div                                                 // @ts-ignore
                onClick={() => setShowParams && setShowParams((p: boolean) => !p)}
                className={`sort-label ${showParams ? 'sort-label_focus' : ''}`}
            >
                <div style={{display: 'flex'}}>
                    <img alt='icon' className='sort-icon' src={require('../../assets/image/sort.png')}/>
                    <div className='text-container'>
                        <span className='placeholder'>Sort by:</span>
                        <span className='sort-name'>{radioValue?.name}</span>
                    </div>
                </div>
                <img alt='icon' className='arrow-icon' src={require('../../assets/image/arrow-down.png')}/>
            </div>

            {/* Plate params */}
            {showParams && <div className='container-params'>
                <RadioButtonGroup
                    options={OPTIONS_FILTER}
                    selectedOption={radioValue}
                    handleChange={(v: FilterOption) => setRadioValue && setRadioValue(v)}
                />
                <div style={{marginTop: '10px'}}>
                    <TabGroup options={TAB_OPTIONS} selectedOption={tabValue} handleChange={(v: FilterOption) => setTabValue && setTabValue}/>
                </div>
            </div>}

        </div>
    );
};

export default PanelParams;
