import React from 'react'
import { useState, useEffect } from 'react';


function spotifyAccess () {

    const spotifyID = import.meta.env.VITE_CLIENT_ID;
    const spotifySECRET = import.meta.env.VITE_CLIENT_SECRET;
  
    const [searchInput, setsearchInput] = useState("");
    const [accessToken, setaccessToken] = useState("");
    const [Album, setAlbum] = useState([]);
   
  
    useEffect(() => {
          let authParams = {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
          },
          body:
              "grant_type=client_credentials&client_id=" +
              spotifyID +
              "&client_secret=" +
              spotifySECRET,
          };
      
          fetch("https://accounts.spotify.com/api/token", authParams)
          .then(result => result.json())
          .then (data => setaccessToken(data.access_token) //This line logs our acces token from spotify, however since data gives access_token then data.access
          ); 
  
      
  
      }, []);
   
}

export default spotifyAccess;
