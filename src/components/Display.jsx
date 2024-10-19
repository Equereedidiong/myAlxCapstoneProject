import React from 'react'
import Artistdp from './Artistdp';
import AlbumItem from './AlbumItem';
import NavBar from './NavBar';
import { NewReleases } from './test';
import { useState, useEffect } from 'react';

function Display () {

  const [ albums, setAlbum] = useState([])
  const [Artistdp, setArtistdp] = useState([])

  //When components mount we fetch data from the NewRelease function from test

  useEffect(() => {
   
    async function fetchData () {

        const {artist, albums} = NewReleases()
        setArtistdp(artist)
        setAlbum(albums)



    }

    fetchData();


  }




  )


  return (

    <>
        <div className='space-y-1 w-[100%] bg-slate-50 overflow-y-auto overflow:hidden '>

            <NavBar />

            <div className='flex '>

                <div className='lg:flex flex-col w-[100%] '>  
                    <div className='flex pr-2 items-start'> 
                        <div className='flex justify-between w-full '>
                            <h3 className='text-slate-700 py-2 px-2 font-semibold '>Popular Artsist</h3>
                            <p className='text-blue-500 py-2  text-sm font-semibold cursor-pointer'>See more</p>
                        </div>
                    </div>
                    <div className='flex justify-between px-1'>

                        <Artistdp /> 
                        <Artistdp />
                        <Artistdp />
                        <Artistdp />
                        <Artistdp />
                        <Artistdp />
                    </div>

                </div>

            </div>
        
            <div className='flex '>

                <div className='lg:flex flex-col w-[100%]'>  
                    <div className='flex pr-2 items-start'> 
                        <div className='flex justify-between w-full '>
                            <h3 className='text-slate-700 py-2 px-2 font-semibold '>Trending songs</h3>
                            <p className='text-blue-500 py-2  text-sm font-semibold cursor-pointer'>See more</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-4 px-2'>
                        <AlbumItem />
                        <AlbumItem />
                        <AlbumItem />
                        <AlbumItem />
                        <AlbumItem />
                        <AlbumItem />
                    </div>
                    

                </div>

                

            </div>

            <div className='lg:flex flex-col w-[100%]'>  
                    <div className='flex pr-2 items-start'> 
                        <div className='flex justify-between w-full '>
                            <h3 className='text-slate-700 py-2 px-2 font-semibold '>Albums</h3>
                            <p className='text-blue-500 py-2  text-sm font-semibold cursor-pointer'>See more</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-4 px-2'>
                        <AlbumItem />
                        <AlbumItem />
                        <AlbumItem />
                        <AlbumItem />
                        <AlbumItem />
                        <AlbumItem />
                    </div>
                    

                </div>




        </div>
    
    </>
    // //make artist components collect propers from what ever deeezer gives. Tis would be an onject 
  )
}

export default Display;