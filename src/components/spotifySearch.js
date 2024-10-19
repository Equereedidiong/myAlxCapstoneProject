import React from 'react'
import { useState, useEffect } from 'react';



async function spotifySearch () {

    const [searchInput, setsearchInput] = useState("");
    const [accessToken, setaccessToken] = useState("");

    console.log('You just searched for ' + searchInput)

    // GET request using search to get the artist ID
    const searchParameters = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken  }

    }

    const artistID = await fetch ("https://api.spotify.com/v1/search?q=" + searchInput + '&type=artist', searchParameters)

       .then(results => results.json())
       .then(data => {return (data.artists.items[0].id)})

    console.log(artistID)

    //Get API Request for Album data

    const albumData = await fetch ( "https://api.spotify.com/v1/search?q=" + searchInput + "&type=album&market=US&limit=24", searchParameters )
      

      const data = await albumData.json()
      setAlbum(data.albums.items)
      //   .then(results => results.json()) 
      //   .then(data => {
      //   setAlbum (data.albums.items) })  

    console.log(data.albums.items);
      
   //Display this album to the user     

}

export default spotifySearch;
