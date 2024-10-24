//This component helps store the Artists Display picture when my fetched data was ready

import React from 'react'
import { assets } from '../assets/Assets'

function Artistdp ({artist}) {


  
  return (

    <>



      <div className='flex flex-col items-center cursor-pointer pt-2'>

        <div> <img src={artist.images[0].url} className= 'h-36 w-36 rounded-full' alt="" /></div>
        <div><p className='text-slate-400 py-1 text-sm'>{artist.name}</p></div>

      </div>
{/* 
      <div className='flex flex-col items-center cursor-pointer pt-2'>

        <div> <img className= 'h-36 w-36'src={assets.Coldplay} alt="" /></div>
        <div><p className='text-slate-400 py-1 text-sm'>Cold Play</p></div>

      </div> 


      <div className='flex flex-col items-center cursor-pointer pt-2'>

        <div> <img className= 'h-36 w-36'src={assets.Stormzy} alt="" /></div>
        <div><p className='text-slate-400 py-1 text-sm'>Stormzy</p></div>

      </div> 


      <div className='flex flex-col items-center cursor-pointer pt-2'>

        <div> <img className= 'h-36 w-36'src={assets.Lewis} alt="" /></div>
        <div><p className='text-slate-400 py-1 text-sm'>Lewis Calpaldi</p></div>

      </div>
     
      <div className='flex flex-col items-center cursor-pointer pt-2'>

        <div> <img className= 'h-36 w-36'src={assets.wizkid} alt="" /></div>
        <div><p className='text-slate-400 py-1 text-sm'>Wizkid</p></div>

      </div>
      <div className='flex flex-col items-center cursor-pointer pt-2'>

        <div> <img className= 'h-36 w-36'src={assets.Burna} alt="" /></div>
        <div><p className='text-slate-400 py-1 text-sm'>Burna Boy</p></div>

      </div>


      <div className='flex flex-col items-center cursor-pointer pt-2'>

        <div> <img className= 'h-36 w-36'src={assets.Davido} alt="" /></div>
        <div><p className='text-slate-400 py-1 text-sm'>Davido</p></div>

      </div> */}


     
    </>
        


    // <div className='h-screen w-[75%] flex justify-end gap-4 flex-row '>
      
    //     <div className='flex flex-row justify-between'>
    //         <div> <p> Popular artist </p> </div>
    //         <div> <p> See more</p> </div>
    //     </div>

    //     <div className='flex flex-row gap- justify-between'>


    //         <div className='flex flex-col items-center '>
    //         <div> <img className= 'h-24 w-24'src={assets.Artistdp_icon} alt="" /></div>
    //         <div><p className='text-slate-400 py-2 text-sm'>Taylor Swift</p></div>
    //         </div>

    //         <div className='flex flex-col items-center '>
    //         <div> <img className= 'h-24 w-24'src={assets.Artistdp_icon} alt="" /></div>
    //         <div><p className='text-slate-400 py-2 text-sm'>Taylor Swift</p></div>
    //         </div>

    //         <div className='flex flex-col items-center '>
    //         <div> <img className= 'h-24 w-24'src={assets.Artistdp_icon} alt="" /></div>
    //         <div><p className='text-slate-400 py-2 text-sm'>Taylor Swift</p></div>
    //         </div>

    //         <div className='flex flex-col items-center '>
    //         <div> <img className= 'h-24 w-24'src={assets.Artistdp_icon} alt="" /></div>
    //         <div><p className='text-slate-400 py-2 text-sm'>Taylor Swift</p></div>
    //         </div>

    //         <div className='flex flex-col items-center '>
    //         <div> <img className= 'h-24 w-24'src={assets.Artistdp_icon} alt="" /></div>
    //         <div><p className='text-slate-400 py-2 text-sm'>Taylor Swift</p></div>
    //         </div>

    //         <div className='flex flex-col items-center '>
    //         <div> <img className= 'h-24 w-24'src={assets.Artistdp_icon} alt="" /></div>
    //         <div><p className='text-slate-400 py-2 text-sm'>Taylor Swift</p></div>
    //         </div>

    //         <div className='flex flex-col items-center '>
    //         <div> <img className= 'h-24 w-24'src={assets.Artistdp_icon} alt="" /></div>
    //         <div><p className='text-slate-400 py-2 text-sm'>Taylor Swift</p></div>
    //         </div>
    //     </div>

        
    // </div>
  )
}

export default Artistdp;