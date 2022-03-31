import './App.css';
import React, {useEffect, useState} from "react";

function App() {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https:/pokeapi.co/api/v2/pokemon/?limit=1126")
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch((err) => {
                console.log(err);
        })
    }, []);

    return (
        <div style={{ width: "200px", margin: "auto" }}>
          <ul>
            {pokemon.map((poke, index) => {
                return (<li key={index}>{poke.name}</li>)
            })}
          </ul>
        </div>
    ); 
}

export default App;
