import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [location, setLocation] = useState([]);
    // console.log(location);
    useEffect(() => { 
    axios
          .get('https://rickandmortyapi.com/api/location/')
          .then(res => {
            const data = res
            // console.log("location Data:", data.data.results);
            setLocation(data.data.results);
          })
          .catch(err => console.log("Server Failed:", err));
      }, []);
    //   name, type, dimension, residents
    return(
        <div>
             {location.map((value, key) => {
        return(
          <LocationCard value={value} key={key} />
        )
      })}
        </div>
    )
}
