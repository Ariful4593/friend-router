import React, {useState, useEffect} from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
    const [friend, setFriend] = useState([]);
      useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriend(data))

      },[])
    return (
        <div>
            
            <h1> Friends: {friend.length}</h1>
      {
        friend.map(x => <Friends friend={x} key={x.id}></Friends>)
      }
        </div>
    );
};

export default Home;