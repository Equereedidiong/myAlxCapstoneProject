//This file is my Login page, but its functionality was not built due to time constarint plus, it was an optional feauture to build

import React from "react";
import { NavLink } from "react-router-dom";


const Login = () => {

    return (
        <>
            <div className="bg-Background bg-cover bg-center h-screen " >
              
              <div>
                  <img className="w-auto h-screen  " src="../public/Disc.svg" alt="" />
              </div>

               <div className = ' w-1/3 border-2 border-slate-500 rounded-lg bg-opacity-10 bg-slate-100 backdrop-blur-sm drop-shadow-xl absolute right-0 top-0 bottom-0 mt-20 mb-20 mx-60 p-16 flex flex-col '>  
                  <div className="flex justify-center m-2">
                      <img className = 'w-8 h-8 m' src="../public/Flick2.svg" alt="" />
                  </div>

                  <form className = 'flex flex-col m-8 gap-8 items-center '>
                        <input
                            type="text"
                            name="name"
                            placeholder = "Username"
                            className = " rounded-md border-0 py-1 pl-7 pr-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder=" Email "
                            className=" rounded-md border-0 py-1.5 pl-4 pr-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            
                        />

                        <NavLink to = "/dashboard" >
                           <button className=' text-sky-950 font-sans font-normal h-10 w-32 pt-1 pb-1  border-2 border-sky-600 rounded-md bg-blue-200 ' > Sign in </button>
                        </NavLink>  
                  </form>

                   <div className="flex justify-center text-gray-400 p-20">
                    <p>&copy; 2024 Flick Inc.</p>
                </div>
               </div> 
                
                
            </div>
           

        </>
           
    )
}

export default Login;