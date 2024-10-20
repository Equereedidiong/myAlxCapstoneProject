import React from "react";
import { NavLink } from "react-router-dom";


const Home = () => {
    // const [count, setCount] = useState(0)
  



  
    return (
      <>
      
        <div className = ' h-screen bg-Background bg-cover items-center ' >
          <nav className='w-screen h-12 bg-nav flex justify-center items-center p-8' >
             
            <div>
  
              <div>
                <img src= "../public/logo.svg"alt="Logo" />
              </div>
              
            </div>
    
          </nav>
           
          <main>
            <div className=' flex items-center justify-center '>
  
              <div className='flex flex-col items-center  pt-10'>
                <div className=' text-lg py-1 mb-2 flex items-center flex-col'>
  
                 <h4 className='text-gray-400 font-normal pb-4 font-sans'> Introducing flick music player </h4>
                 <h2 className='text-5xl font-sans font-extralight text-slate-50 pb-8'>Listen to music <span className=' text-sky-200 italic font-thin'> differently </span></h2> 
  
                </div>
  
                <div className='rounded-md max-w-80 max-h-80 flex flex-col items-center '> 
                  <img className = '' src="../public/Transform.svg" alt= "" />
  
                  <img className = 'pt-8 pb-8' src="../public/Playback.svg" alt="" />
                  
                  <NavLink to = "/Login" >
                      <button className=' text-sky-950 font-sans font-normal h-12 w-32 pt- pb- border-2 border-sky-500 rounded-md bg-blue-100 ' > Open App </button>
                  </NavLink> 
                </div>
  
  
              </div>                
  
            
  
            </div>
            
          </main>
  
        </div>
  
  
      </>
    )
};

export default Home;

