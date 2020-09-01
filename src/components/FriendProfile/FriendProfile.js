import React from 'react';

const FriendProfile = (props) => {
    const {name,username,email,phone,website} = props.profile;
    const friendStyle = {
        border: "1px solid purple",
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendProfile;