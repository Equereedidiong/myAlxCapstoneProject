import {createContext, useRef, useState}  from "react"
import { assets, songs, songs2 } from "../../assets/Assets";
 


export const PlayerContext = createContext();

function  PlayerContextProvider (props) {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    
  const contextValue = { audioRef, seekBar, seekBg, play, pause }

    const [track, setTrack] = useState(songs[0]);
    const [playStatus, setPlayStatus] = useState(false);
     
    function play () {
         
        audioRef.current.play()
        setPlayStatus(true)
    

    }

    function pause () {
         
        audioRef.current.pause()
        setPlayStatus(false)
    

    }



  return (

    <PlayerContext.Provider value ={contextValue}>
        {props.children}
    </PlayerContext.Provider>
  )


}

export default PlayerContextProvider;