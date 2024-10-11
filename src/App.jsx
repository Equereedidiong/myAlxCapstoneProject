import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import Login  from './components/Login'
// import { BrowserRoutes, Router, Routes, Routes} from react-router-dom;

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <body className = ' bg-Background bg-center bg-cover  h-screen items-center  ' >
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

               <h4 className='text-slate-50 font-normal pb-4 font-poppins'> Introducing flick music player </h4>
               <h2 className='text-5xl font-medium text-slate-50 pb-8'>Listen to music <span className=' text-slate-100 italic font-normal'>differently</span></h2> 

              </div>

              <div className='rounded-md max-w-80 max-h-80 flex flex-col items-center '> 
                <img className = '' src="../public/Transform.svg" alt= "" />

                <img className = 'pt-16 pb-16' src="../public/Playback.svg" alt="" />

                <button className=' text-sky-950 font-normal h-56 w-32 pt-1 pb-1  border-2 border-sky-600 rounded-md bg-blue-200 ' > Open App </button>

              </div>


            </div>                

          

          
            {/* <button className=''> Open app </button> */}
          </div>
          
        </main>

      </body>

      < Login />
    </>
  )
}

export default App;
