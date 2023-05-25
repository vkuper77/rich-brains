import React from 'react';
import './style.css'
import { Client } from '../../state/types';

interface CardProps { user: Client, callback(client: Client): void  }

const Card = ({user, callback}: CardProps) => {
    return (
        <div onClick={ () => callback(user)} className='card'>
            <img
                alt='avatar'
                className='card-avatar'
                src={require('../../assets/image/avatar.png')}
            />
            <h3 className="user-name">{user.name} {user.surname}</h3>
            <div className="info">
                <img
                    alt='icon'
                    className='card-icon'
                    src={require('../../assets/image/map-pin.png')}
                />
                <span>{user.country}</span>
            </div>
            <div className="info">
                <img
                    alt='icon'
                    className='card-icon'
                    src={require('../../assets/image/telephone.png')}
                />
                <span>{user.phone}</span>
            </div>
            <div className="info">
                <img
                    alt='icon'
                    className='card-icon'
                    src={require('../../assets/image/calendar.png')}
                />
                <span>{user.age}</span>
            </div>
        </div>
    );
};

export default Card;
