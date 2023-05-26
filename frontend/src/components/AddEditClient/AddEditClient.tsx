import React, {ChangeEvent, useCallback, useState} from 'react';
import './style.css'
import '../SignOut/style.css'
import MainButton from "../UI/Buttons/MainButton/MainButton";
import Input from "../UI/Inputs/Input/Input";
import {useModalContext} from "../../context/modal-desk/context";
import DeleteButton from "../UI/Buttons/DeleteButton/DeleteButton";
import {useAppContext} from "../../context/app/context";
import {ModalType} from "../../costansts/type-modal";
import InputDate from "../UI/Inputs/InputDate/InputDate";
import SelectInput from "../UI/Inputs/SelectInput/SelectInput";
import {COUNTRY, TEL_DATA} from "../../costansts/constants-input";

interface AddEditClientProps {
    callback: () => void
}

const AddEditClient: React.FC<AddEditClientProps> = ({callback}) => {
    const {state: {data}, open, setPrevScreen, prevScreen} = useModalContext()

    const [firstName, setFirstName] = useState<string>(data?.name ?? '')
    const [lastName, setLastName] = useState<string>(data?.surname ?? '')
    const [birthday, setBirthday] = useState<number | null>(data?.age ?? null)
    const [country, setCountry] = useState<string>(data?.country ?? '')
    const [typePhone, setTypePhone] = useState<string>('Mob')
    const [phone, setPhone] = useState<string>(data?.phone ?? '')

    const app = useAppContext()

    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }

    const handleBirthdayChange = (value: number) => {
        setBirthday(value)
    }

    const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCountry(event.target.value)
    }

    const handleTypePhoneChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setTypePhone(event.target.value)
    }

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value)
    }

    const submit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (data.isNew) {
            await app?.addClient({
                name: firstName,
                surname: lastName,
                age: birthday ?? 0,
                phone: phone,
                country: country
            })
        } else if (!data.isNew) {
            await app?.editClient({
                id: data.id,
                name: firstName,
                surname: lastName,
                age: birthday ?? 0,
                phone: phone,
                country: country
            })
        }
    }

    const onPressDelete = useCallback(() => {
        setPrevScreen()
        open({type: ModalType.DeleteClient, data: {id: data.id}})
    }, [])

    return (
        <div className='client-wrapper'>
            <div onClick={callback} className='cross-icon'>
                <img alt='cross' src={require('../../assets/image/close.png')}/>
            </div>
            <form className='client-container' onSubmit={submit}>
                <h2 className='client-card-title'>{data.isNew ? 'New client' : 'Edit client'}</h2>
                <div className='client-container-info'>
                    <img alt='avatar' className='client-avatar' src={require('../../assets/image/avatar.png')}/>
                    <div className='client-container-inputs'>
                        <div className='client-container-name' style={{marginBottom: '20px'}}>
                            <label className='label-inputs' style={{marginRight: '20px'}}>
                                First name
                                <Input placeholder={'First name'} style={{marginTop: '7px'}} type={'text'}
                                       value={firstName}
                                       handleChange={handleFirstNameChange}/>
                            </label>
                            <label className='label-inputs'>
                                Last name
                                <Input placeholder={'Last name'} style={{marginTop: '7px'}} type={'text'}
                                       value={lastName}
                                       handleChange={handleLastNameChange}/>
                            </label>
                        </div>
                        <label className='label-inputs'>
                            Date of birth
                            <div style={{marginTop: '7px', marginBottom: '20px'}}>
                                <InputDate setValue={handleBirthdayChange} value={birthday || null}/>
                            </div>
                        </label>
                        <label className='label-inputs'>
                            Country
                            <div style={{marginTop: '7px', marginBottom: '20px'}}>
                                <SelectInput placeholder='Select' data={COUNTRY} value={country}
                                             handleChange={handleCountryChange}/>
                            </div>
                        </label>
                        <label className='label-inputs'>
                            Telephone
                            <div style={{marginTop: '7px', display: 'flex'}}>
                                <SelectInput
                                    style={{width: '90px', borderBottomRightRadius: 0, borderTopRightRadius: 0}}
                                    placeholder='' data={TEL_DATA}
                                    value={typePhone} handleChange={handleTypePhoneChange}/>
                                <Input style={{flex: '1', borderBottomLeftRadius: 0, borderTopLeftRadius: 0}}
                                       placeholder={'Telephone'} type={'tel'} value={phone}
                                       handleChange={handlePhoneChange}/>
                            </div>
                        </label>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '100px', marginRight: '10px'}}>
                            <MainButton type='submit' text='Save' styleButton='main-button'/>
                        </div>
                        <div style={{width: '100px'}}>
                            <MainButton
                                type='button'
                                text='Cancel'
                                styleButton='secondary-button'
                                callback={() => open(prevScreen)}
                            />
                        </div>
                    </div>
                    {!data.isNew && <DeleteButton callback={onPressDelete}/>}
                </div>
            </form>
        </div>
    );
};

export default AddEditClient;
