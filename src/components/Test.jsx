import React, { useState, useEffect } from 'react';
import { assets } from '../assets/Assets';

const spotifyID = import.meta.env.VITE_CLIENT_ID;
const spotifySECRET = import.meta.env.VITE_CLIENT_SECRET;

export function NewReleases() {

    const [accessToken, setaccessToken] = useState("");
    const [newReleases, setNewReleases] = useState([]);

    // Fetch access token from Spotify
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
                console.log('Access Token:', data); // Log the data to see the access token
                setaccessToken(data.access_token); // Set access token in the state
            })
            .catch(error => console.error('Error fetching token:', error)); // Catch any errors
    }, []); // Only run once on component mount

    // Fetch new album releases from Spotify
    useEffect(() => {
        if (!accessToken) return; // Wait until accessToken is set

        async function fetchNewReleases () {
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
                    console.log('New Releases:', data.albums.items);
                })
                .catch(error => console.error('Error fetching new releases:', error));
        };

        fetchNewReleases();
    }, [accessToken]); // Fetch new releases when the accessToken is available

    return (
        <>
            <div>
                <div className="lg:flex justify-end">
                    <div className="w-[100%] h-[80%] bg-slate-50 opacity-80 text-white py-2 border-0 border-b">
                        <div className="lg:flex items-center justify-between px-3">
                            <div className="flex items-center gap-2">
                                <img className="w-6 h-6" src={assets.wave_icon} alt="" />
                                <p className="text-gray-600">New Releases</p>
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-6 max-h-screen">
                                {newReleases.map((album) => (
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

export default NewReleases; 
