import React from 'react';
import Card from "../Card/Card";
import './style.css'

const DATA = new Array(10).fill('').map((_, idx) => ({
    "name": "alexey" + idx,
    "surname": "shkut" + idx,
    "age": 25 + idx,
    "phone": "+375297428416",
    "id": idx,
    "country": "balarus"
}))

const Users = () => {
    return (
        <div className='users-wrapper'>
            <div className='users-container _container'>
                {DATA.map((item) => <Card key={item.id} user={item}/>)}
            </div>
        </div>
    );
};

export default Users;
