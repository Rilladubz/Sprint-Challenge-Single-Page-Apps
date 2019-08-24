import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import axios from 'axios';

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);
    // console.log(episodes);
    useEffect(() => { 
    axios
          .get("https://rickandmortyapi.com/api/episode/")
          .then(res => {
            const data = res
            // console.log("Episode Data:", data.data.results);
            setEpisodes(data.data.results);
          })
          .catch(err => console.log("Server Failed:", err));
      }, []);
    return(
        <div>
            {episodes.map((value, key) => {
        return(
          <EpisodeCard value={value} key={key}/>
        )
      })}
        </div>
    )
}