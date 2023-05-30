import React from 'react'
import {Client} from '../../state/types'
import {BUTTONS_SMALL_CARD} from "../../costansts/buttons-small"
import './style.css'

interface CardProps {
    user: Client,
    isAuthenticated: boolean

    callback(client: Client): void

    secondaryCallback(id: number, client: Client): void
}

const Card: React.FC<CardProps> = ({isAuthenticated, user, callback, secondaryCallback}) => {
	return (
		<div onClick={() => callback(user)} className='card'>
			{isAuthenticated && <div className='buttons-sm-wrapper'>
				{BUTTONS_SMALL_CARD.map((itm) => <div onClick={(e) => {
					e.stopPropagation()
					secondaryCallback(itm.id, user)
				}} key={itm.id}>
					<img className='button-sm-img' alt='icon-btn' src={itm.icon}/>
				</div>)}
			</div>}
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
				<span>{user.date}</span>
			</div>
		</div>
	)
}

export default Card
