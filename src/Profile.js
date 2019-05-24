import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Profile() {
    useEffect(() =>{
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

const fetchItems = async () => {
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');


const items = await data.json();
console.log(items.items);
setItems(items.items);

};
  return (
    <div>
    
    {items.map(item => (
        <h2 key={items.itemid}>
        <Link to= {`/Profile/${items.itemid}`}>{item.name}</Link>
        </h2>
    ))}
    
    </div>
  );
}

export default Profile;
