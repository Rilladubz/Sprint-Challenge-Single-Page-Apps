import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  // TODO: Add useState to track data from useEffect
// console.log(characters);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        const data = res
        // console.log("Chracter Data:", data.data.results);
        setCharacters(data.data.results);
      })
      .catch(err => console.log("Server Failed:", err));
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map((value, key) => {
        return(
          <CharacterCard value={value} key={key}/>
        )
      })}
    </section>
  );
}
