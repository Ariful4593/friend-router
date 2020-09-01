import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const { id, name, phone, username, website } = props.friend;
    const friendStyle = {
        border: "1px solid purple",
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <p>Id: <Link to={`/about/${id}`}>{id}</Link> </p>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>Username: {username}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default Friends;