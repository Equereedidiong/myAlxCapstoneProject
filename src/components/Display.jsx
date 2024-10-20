import React, { useState, useEffect } from 'react';
import { assets, songs } from '../assets/Assets';
import AlbumItem from './AlbumItem'; // Ensure you have this component to display album details
import NavBar from './NavBar';
import Artistdp from './Artistdp';
import SongItem from './SongItem';

const spotifyID = import.meta.env.VITE_CLIENT_ID;
const spotifySECRET = import.meta.env.VITE_CLIENT_SECRET;

function NewReleases() {
    const [accessToken, setAccessToken] = useState("");
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
                setAccessToken(data.access_token); // Set access token in the state
            })
            .catch(error => console.error('Error fetching token:', error)); // Catch any errors
    }, []); // Only run once on component mount

    // Fetch new album releases from Spotify
    useEffect(() => {
        if (!accessToken) return; // Wait until accessToken is set

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
                .catch(error => console.error('Error fetching new releases:', error));
        };

        fetchNewReleases();
    }, [accessToken]); // Fetch new releases when the accessToken is available

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
                            <Artistdp /> 
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
                                <AlbumItem key={album.id} album={album} /> // Pass album data to AlbumItem
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
                                <SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} file={item.file} /> // Pass album data to AlbumItem
                            ))}
                        </div>
                    </div>
               </div>

            </div>


        </>
    );
}

export default NewReleases;


// // return (
// //     <>
//         <div className='space-y-1 w-[100%] bg-slate-50 overflow-y-auto overflow:hidden '>
//             <NavBar />

//             <div className='flex '>
//                 <div className='lg:flex flex-col w-[100%] '>  
//                     <div className='flex pr-2 items-start'> 
//                         <div className='flex justify-between w-full '>
//                             <h3 className='text-slate-700 py-2 px-2 font-semibold '>Popular Artist</h3>
//                             <p className='text-blue-500 py-2 text-sm font-semibold cursor-pointer'>See more</p>
//                         </div>
//                     </div>
//                     <div className='flex justify-between px-1'>
//                         <Artistdp /> 
//                     </div>
//                 </div>
//             </div>
//        </div>

// //             <div className='flex '>
// //                 <div className='lg:flex flex-col w-[100%]'>  
// //                     <div className='flex pr-2 items-start'> 
// //                         <div className='flex justify-between w-full '>
// //                             <h3 className='text-slate-700 py-2 px-2 font-semibold '>New releases</h3>
// //                             <p className='text-blue-500 py-2 text-sm font-semibold cursor-pointer'>See more</p>
// //                         </div>
// //                     </div>
// //                     <div className='flex justify-between gap-4 px-2'>
// //                         {newReleases.map((album) => (
// //                             <AlbumItem key={album.id} album={album} />
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className='lg:flex flex-col w-[100%]'>  
// //                 <div className='flex pr-2 items-start'> 
// //                     <div className='flex justify-between w-full '>
// //                         <h3 className='text-slate-700 py-2 px-2 font-semibold '>Albums</h3>
// //                         <p className='text-blue-500 py-2 text-sm font-semibold cursor-pointer'>See more</p>
// //                     </div>
// //                 </div>
// //                 <div className='flex justify-between gap-4 px-2'>
// //                     <AlbumItem />
// //                 </div>
// //             </div>
// //         </div>
// //     </>
// // );