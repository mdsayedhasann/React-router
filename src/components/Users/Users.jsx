import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css'



const Users = () => {
    const users = useLoaderData();
    return (
        <div >
            <h3>Users: {users.length}</h3>
            <div className='grid'>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;