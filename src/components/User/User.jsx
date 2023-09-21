/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { name, id , email , address , phone} = user;
    const userStyle = {
        border: '1px solid red',
        margin: '30px'
    }
  return (
    <div style={userStyle}>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <h3>City: {address.city}</h3>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
