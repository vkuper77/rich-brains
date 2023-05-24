import React, {ChangeEvent, useState} from 'react';
import './style.css'
import '../SignOut/style.css'
import MainButton from "../UI/Buttons/MainButton/MainButton";
import Input from "../UI/Inputs/Input/Input";
import {useModalContext} from "../../context/modal-desk/context";
import DeleteButton from "../UI/Buttons/DeleteButton/DeleteButton";
import {useAppContext} from "../../context/app/context";

interface AddEditClientProps {
    callback: () => void
}

const AddEditClient = ({callback}: AddEditClientProps) => {
    const {state: {data}, open, prevScreen} = useModalContext()

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [birthday, setBirthday] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const app = useAppContext()

    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }

    const handleBirthdayChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBirthday(event.target.value)
    }

    const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value)
    }

    const submit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        await app?.addClient({name: firstName, surname: lastName, age: 27 /** test age */, phone: phone, country: country})
    }

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
                                <Input style={{marginTop: '7px'}} type={'text'} value={firstName}
                                       handleChange={handleFirstNameChange}/>
                            </label>
                            <label className='label-inputs'>
                                Last name
                                <Input style={{marginTop: '7px'}} type={'text'} value={lastName}
                                       handleChange={handleLastNameChange}/>
                            </label>
                        </div>
                        <label className='label-inputs' style={{marginBottom: '20px'}}>
                            Date of birth
                            <Input style={{marginTop: '7px', marginBottom: '20px'}} type={'date'} value={birthday}
                                   handleChange={handleBirthdayChange}/>
                        </label>
                        <label className='label-inputs'>
                            Country
                            <Input style={{marginTop: '7px', marginBottom: '20px'}} type={'text'} value={country}
                                   handleChange={handleCountryChange}/>
                        </label>
                        <label className='label-inputs'>
                            Telephone
                            <Input style={{marginTop: '7px'}} type={'tel'} value={phone}
                                   handleChange={handlePhoneChange}/>
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
                    {!data.isNew && <DeleteButton callback={() => {
                    }}/>}
                </div>
            </form>
        </div>
    );
};

export default AddEditClient;
