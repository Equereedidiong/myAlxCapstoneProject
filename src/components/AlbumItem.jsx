import React from 'react'
import { assets } from '../assets/Assets';

function  AlbumItem ({ album }) {
  console.log(album)


  return (

    <>
    
      <div className=' cursor-pointer hover:bg-[#ffffff26] ' >
         <img className='w-40 h-40 rounded-md 'src={album.images[0].url} alt="" />
          <p className='font-medium mt-0 mb-0 text-sm py-1'>{album.name.slice(0,24)}</p>
          <p className='text-slate-400 text-xs font-light'>{album.artists[0].name}</p>     
      </div>
    
    </>

)
}

export default AlbumItem;