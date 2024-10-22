//This file is where my search input functionality lives. 
//It welcomes the user when logged in and also helps them search for albums,songs,tracks etc.

import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';
import { assets } from '../assets/Assets';
import AlbumItem from './AlbumItem';

const spotifyID = import.meta.env.VITE_CLIENT_ID;
const spotifySECRET = import.meta.env.VITE_CLIENT_SECRET;

function NavBar() {
    const [searchInput, setsearchInput] = useState("");
    const [accessToken, setaccessToken] = useState("");
    const [Album, setAlbum] = useState([]);
    const [defaultAlbums, setdefaultAlbums] = useState([])

    // Code to Fetch access token from Spotify
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
                console.log('Access Token:', data); 
                setaccessToken(data.access_token); 
            })
            .catch(error => console.error('Error fetching token:', error)); // Catch any errors
    }, []); // Only run once on component mount

    // The Function to search for albums and artists
    async function search() {
        console.log('You just searched for: ' + searchInput);

        if (!accessToken) {
            console.error('No access token available!');
            return;
        }

        if (searchInput === "" )  { 
            //The  Code to reset search input when cleared.
            setAlbum(defaultAlbums);
            return;
        }

        const searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };

        // The Code to Get artist ID
        const artistID = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, searchParameters)
            .then(results => results.json()) 
            .then(data => (data.artists.items.length ? data.artists.items[0].id : null))
            .catch(error => console.error('Error fetching artist:', error));  

        console.log('Artist ID:', artistID);

        // The Code to Get album data based on the search input
        const albumData = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=album&market=US&limit=24`, searchParameters)
            .then(results => results.json())
            .then(data => {
                setAlbum(data.albums.items);
                defaultAlbums(data.albums.items)
                console.log('Albums:', data.albums.items);
            })
            .catch(error => console.error('Error fetching albums:', error));
            // If search input is cleared, this code helps to reset to default albums but it did not work for some reasons
            if (searchInput === "" )  { 

                setAlbum(defaultAlbums);
                return;
            }
    
    }

    return (
        <>
            <div>
                <div className="lg:flex justify-end">
                    <div className="w-[100%] h-[80%] bg-slate-50 opacity-80 text-white py-2 border-0 border-b">
                        <div className="lg:flex items-center justify-between px-3"> 
                            <div className="flex items-center gap-2">
                                <img className="w-6 h-6" src={assets.wave_icon} alt="" />
                                <p className="text-gray-600">Welcome </p>
                            </div>
                            <div>
                                <input
                                    onKeyDown={event => {
                                        if (event.key === "Enter") {
                                            search(); // I fired the search function
                                        }
                                    }}
                                    className="rounded-md border-0 py-1 pl-7 pr-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                                    onChange={event => setsearchInput(event.target.value)}
                                    placeholder="Search albums, songs, artist"
                                />
                            </div>
                            <div className="p-4">
                                <img src={assets.notification_icon} alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-6 max-h-screen">
                                {Album.map((album) => (
                                    <div key={album.id} className="cursor-pointer hover:bg-[#ffffff26]">
                                        <img className="w-40 h-40 rounded-md" src={album.images[0].url} alt="" />
                                        <p className="font-semibold mt-0 mb-0 text-sm py-1 text-slate-950">{album.name}</p>  
                                        <p className="text-slate-800 text-xs font-light">{album.artists[0].name}</p> 
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
