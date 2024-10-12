import React from 'react'
import SideNav from './SideNav';
import { assets } from '../assets/Assets';



export const NavBar = () => {
  return (

    <>  

        <div>

            <div className='lg:flex justify-end '>

                <div className=' w-[100%] h-[80%] bg-slate-50 opacity-80 text-white py-2 border-0 border-b'>

                    <div className=' lg:flex items-center justify-between px-3 '>
                        <div className='flex items-center gap-2'>
                            <img className=' w-6 h-6' src={assets.wave_icon} alt="" />
                            <p className='text-gray-600'>Welcome Edidiong</p>
                            </div>

                            <div>

                            
                            <input  
                            
                            className = " rounded-md border-0 py-1 pl-7 pr-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                            placeholder= 'search albums,songs,artist '
                                
                            />                     
                        </div>
                            
                        <div>
                            <img className=''src={assets.notification_icon} alt="" />
                        </div>
                    </div>

                </div>

            </div>


        </div>



    </>

  )
  
}

export default NavBar;
