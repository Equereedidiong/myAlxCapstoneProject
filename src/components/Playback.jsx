import React, { useContext } from 'react'
import SideNav from './SideNav';
import Dashboard from './Dashboard';
import { assets, songs } from '../assets/Assets';
import PlayerContextProvider from './context/PlayerContext';
import { PlayerContext } from './context/PlayerContext';
import { playsong } from './SongItem'

export const Playback = () => {

   const {seekBar, seekBg, play, pause, playStatus} = useContext(PlayerContext)
  return (
    <>


        <div className='w-[100%] bg-[#13191D] bg-transparent text-white px-8 py-2 h-[12%]'>

            <div className=' lg:flex justify-between '>
                <div className=' lg:flex items-center gap-4 '>
                    <img className='w-12 rounded' src={songs.image} alt="" />
                    <div>
                        <p>{songs.name}</p>
                        <p className='text-slate-500 font-light text-sm'>{songs.desc}</p>
                    </div >
                </div>
                <div>
                    <div className='flex flex-col items-center gap-1 m-auto'>

                        <div className='flex gap-6 py-2'>
                            <img className=' w-4 cursor-pointer'src={assets.back_icon} alt="" />
                            <img onClick={playsong} className=' w-4 cursor-pointer'src={assets.play_icon} alt="" />
                            <img onClick={pause} className=' w-4 cursor-pointer'src={assets.pause_icon} alt="" />
                            <img className=' w-4 cursor-pointer'src={assets.next_icon} alt="" />


                        </div>

                        <div className='flex items-center gap-4 justify-between'>
                            <p className='text-sm'>1:03</p>
                            <div ref={seekBg} className='w-[60vw] max-w-[500px] h-1 bg-gray-400 rounded-full cursor-pointer'>
                              <hr ref={seekBar} className='h-1 border-none w-10  bg-blue-700 rounded-full '/>
                            </div>
                            <p className='text-sm'>3:20</p>


                        </div>

                    </div>
                    
                </div>

                <div className='lg:flex items-center gap-2 opacity-75 pl-0'>
                  <img className='w-6'src={assets.volume_icon} alt="" />
                  <div className='w-20 bg-slate-50 h-1 rounded-full cursor-pointer '>
                  </div>              
                </div>
            </div>

        </div>
    </>

  )
}

export default Playback;