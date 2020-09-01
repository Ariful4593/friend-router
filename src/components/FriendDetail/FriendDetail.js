import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import FriendProfile from '../FriendProfile/FriendProfile';

const FriendDetail = () => {
    const {userId} = useParams()
    const [friendData, setFriendData] = useState([]);
    useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriendData(data));
    },[])
    return (
        <div>
            <h3>This is Friend Detail Component {userId}</h3>
            
            <FriendProfile profile={friendData}></FriendProfile>
        </div>
    );
};

export default FriendDetail;