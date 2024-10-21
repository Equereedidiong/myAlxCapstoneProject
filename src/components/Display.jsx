import React, { useState, useEffect } from 'react';
import { assets, songs } from '../assets/Assets';
import AlbumItem from './AlbumItem'; 
import NavBar from './NavBar';
import Artistdp from './Artistdp';
import SongItem from './SongItem';

//My spotify's secret code stored in .env file
const spotifyID = import.meta.env.VITE_CLIENT_ID;
const spotifySECRET = import.meta.env.VITE_CLIENT_SECRET;

function NewReleases() {
    const [accessToken, setAccessToken] = useState("");
    const [newReleases, setNewReleases] = useState([]);
    const [ArtistsData, setArtistsData] = useState([]);

    // Code to  Fetch access token from Spotify
    useEffect(() => { 
        const authParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                'grant_type': 'client_credentials',
                'client_id': spotifyID,
                'client_secret': spotifySECRET
            }).toString()
        };

        fetch("https://accounts.spotify.com/api/token", authParams)
            .then(result => result.json())
            .then(data => {
                setAccessToken(data.access_token); //I then Set access token in the state that includes the fetched data, this way you see the object itself
            })
            .catch(error => console.error('Error fetching token:', error)); // to Catch my errors
    }, []); // Only run once on component mount

    // Code to Fetch new album releases from Spotify
    useEffect(() => {
        if (!accessToken) return; 

        const fetchNewReleases = async () => {
            const releaseParameters = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }
            };

            const releases = await fetch('https://api.spotify.com/v1/browse/new-releases?country=US&limit=6', releaseParameters)
                .then(response => response.json())
                .then(data => { 
                    setNewReleases(data.albums.items);
                })
                .catch(error => console.error('Error fetching new releases:', error)); // to Catch my errors
        };

        fetchNewReleases();
    }, [accessToken]); 
    
   // Code to Fetch new album releases from Spotify

    useEffect(() => {
        if (!accessToken) return; 
    
        const fetchArtists = async () => {
            const artistParameters = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }
            };


            // With spotify's endpoint you need to fetch the artists Id first then put it in the 

            const artistIds = [
                '06HL4z0CvFAxyc27GXpf02', // Taylor Swift as designed in my UI
                '4gzpq5DPGxSnKTe4SA8HAU', // Coldplay Swift asdesigned in my UI
                '4GNC7GD6oZMSxPGyXy4MNB', // Lewis Capaldi Swift as designed in my UI
                '3tVQdUvClmAT7URs9V3rsp', // Wizkid Swift as designed in my UI
                '3wcj11K77LjEY1PkEazffa', // Burna Boy Swift as designed in my UI
                '0Y3agQaa6g2r0YmHPOO9rh'  // Davido Swift as designed in my UI
            ].join(',');
    
            await fetch(`https://api.spotify.com/v1/artists?ids=${artistIds}`, artistParameters)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setArtistsData(data.artists); 
                })
                .catch(error => console.error('Error fetching artists:', error));
        };
    
        fetchArtists();
    }, [accessToken]); 
    

    return (
        <>
           <div className='space-y-1 w-[100%] bg-slate-50 overflow-y-auto overflow:hidden '>
                <NavBar />

                <div className='flex m-2 '>
                    <div className='lg:flex flex-col w-[100%] '>  
                        <div className='flex pr-2 items-start'> 
                            <div className='flex justify-between w-full '>
                                <h3 className='text-slate-700 py-2 px-2 font-semibold '>Popular Artist</h3>
                                <p className='text-blue-500 py-2 text-sm font-semibold cursor-pointer'>See more</p>
                            </div>
                        </div>

                        <div className='flex justify-between px-1'>
                            {ArtistsData.map((artist) => (
                                <Artistdp key={artist.id} artist={artist} /> // I then Passed artist data to Artistsdp
                            ))}
                        </div>

                    </div>
                </div>
              

               <div className='flex m-2'>
                    <div className='lg:flex flex-col w-[100%]'>  
                        <div className='flex pr-2 items-start'> 
                            <div className='flex justify-between w-full '>
                                <h3 className='text-slate-700 py-2 px-2 font-semibold '>New releases</h3>
                                <p className='text-blue-500 py-2 text-sm font-semibold cursor-pointer'>See more</p>
                            </div>
                        </div>
                        <div className='flex justify-between gap-4 px-2'>
                            {newReleases.map((album) => (
                                <AlbumItem key={album.id} album={album} /> // I then Passed album data to AlbumItem
                            ))}
                        </div>
                    </div>
               </div>

              <div className='flex m-2 '>
                    <div className='lg:flex flex-col w-[100%]'>  
                        <div className='flex pr-2 items-start'> 
                            <div className='flex justify-between w-full '>
                                <h3 className='text-slate-700 py-2 px-2 font-semibold '>Trending</h3>
                                <p className='text-blue-500 py-2 text-sm font-semibold cursor-pointer'>See more</p>
                            </div>
                        </div>
                        <div className='flex justify-between gap-4 px-2'>
                            {songs.map((item, index) => (
                                <SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} file={item.file} /> // I then Passed album data to AlbumItem which existed from my assets.js file
                            ))}
                        </div>
                    </div>
               </div>

            </div>


        </>
    );
}

export default NewReleases;


