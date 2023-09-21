/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import './Post.css'
import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='posts-box'>
            <h4 className=''> {id} </h4>
            <h3 className=''>Title: {title} </h3>
            {/* <p className='left'> {body} </p> */}
            <Link to={`/post/${id}`}>
                <button>View Post</button>
            </Link>
        </div>
    );
};

export default Post;