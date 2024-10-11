import React from "react"

function Header ( ) {

    return (
         
        <div className = ' bg-Background bg-center filter bg-cover w-screen h-screen' >
         
         <nav className='w-screen h-12 border '>
           
            <div className='flex space-x-96'>

            <div>
              <img src= "../public/logo.svg"alt="Logo" />
            </div>
            

            <div className=''>
              <ul className='flex justify-center space-x-8'>
                <li>
                  <a href="#"> Home </a>
                </li>
                <li>
                  <a href="#"> About </a>
                </li>
              </ul>                
            </div>


        </div>

        </nav>

    )
};

export default Header;