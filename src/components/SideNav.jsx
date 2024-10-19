import React from 'react'
import { assets } from '../assets/Assets'





const SideNav = () => {
  return (

    
    <div className='w-[20%] text-sm bg-slate-100 h-[100%] py-4 px-6 flex-col gap-10 text-[#7E7D8F] justify-normal lg:flex border-r-2'>
    
      <div className=' gap-5 rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8  cursor-pointer'>
         <img className='w-20' src={assets.flick_icon} alt="" />
        </div>
        
        <div> 
          <p className='text-[#7e7d8f] opacity-50 text-xs' >Main menu</p>
        </div>

        <div className='bg-[fcfcfc] gap-2'>

          <div className='flex justify-start gap-3 pl-0  cursor-pointer'>
          <img src={assets.home_icon} alt="" />
          <p className=''> Home</p>
          </div>
        </div>


        <div className='flex items-center gap-3 pl-0  cursor-pointer'>
         <img src={assets.settings_icon} alt="" />
         <p> Songs</p>
        </div>

        <div className='flex items-center gap-3 pl-0  cursor-pointer'>
         <img src={assets.album_icon} alt="" />
         <p> Albums</p>
        </div>

        <div className='flex items-center gap-3 pl-0 cursor-pointer'>
         <img src={assets.album_icon} alt="" />
         <p> Trending</p>
        </div>
        <div>
          <p className='text-[#7e7d8f] opacity-50 text-xs'> Playlist</p>
        </div>
        <div className='flex items-center gap-3 pl-0  cursor-pointer'>
         <img src={assets.top100_icon} alt="" />
         <p> Top 100</p>
        </div>

        <div className='flex items-center gap-3 pl-0  cursor-pointer'>
         <img src={assets.workout_icon} alt="" />
         <p> Work outs</p>
        </div>
        
        <div className='flex items-center gap-3 pl-0  cursor-pointer'>
         <img src={assets.focusmode_icon} alt="" />
         <p> Focus mode</p>
        </div>
          
        <div> 
          <p className='text-[#7e7d8f] opacity-50 text-xs' >Support</p>
        </div>
        <div className='flex items-center gap-3 pl-0  cursor-pointer'>
         <img src={assets.help_icon} alt="" />
         <p> Help</p>
        </div>

        <div className='flex items-center gap-3 pl-0  cursor-pointer'>
         <img src={assets.settings_icon} alt="" />
         <p> Settings</p>
        </div>

        <div className='flex items-center gap-3 pl-0  cursor-pointer'>
         <img src={assets.logout_icon} alt="" />
         <p> Sign out</p>
        </div>
      </div>


     
    </div>

  )
}

export default SideNav;