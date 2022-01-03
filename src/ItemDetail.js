import React, { useState, useEffect } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

function Item() {
    const { id } = useParams();

    useEffect(() => {
        fetchItem();
    }, []);

  const [item, setItem] = useState({sprites: []});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const item = await fetchItem.json();
    setItem(item);
  }

  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.sprites.front_default}></img>
    </div>
  );
}

export default Item;
