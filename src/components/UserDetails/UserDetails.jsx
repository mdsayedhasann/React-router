/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData()
    const {name, username, email} = user;
    return (
        <div>
            <h1>User Details</h1>
            <ul>
                <li>Name:  {name}</li>
                <li>Username: {username}</li>
                <li>Email: {email}</li>
            </ul>
        </div>
    );
};

export default UserDetails;