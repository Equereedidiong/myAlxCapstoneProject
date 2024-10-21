//This 

import React, { useState, useRef } from 'react';
import { songs } from '../assets/Assets'; // Assuming your song data is already here
import { assets } from '../assets/Assets'; // For your icons

const Playback = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track the current song index
  const [isPlaying, setIsPlaying] = useState(false); // Track if the song is playing
  const audioRef = useRef(new Audio(songs[currentSongIndex].file)); // Reference to the audio element

  // Play the current song
  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Pause the current song
  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // Move to the next song
  const next = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length); // Loop back if at the end
  };

  // Move to the previous song
  const previous = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length); // Loop back if at the start
  };

  // When the current song changes, load and play the new song
  useEffect(() => {
    audioRef.current.pause(); // Pause the old song
    audioRef.current = new Audio(songs[currentSongIndex].file); // Set the new song
    if (isPlaying) {
      play(); // Play the new song if the previous one was playing
    }
  }, [currentSongIndex]);

  return (
    <div className='flex gap-6 py-2'>
      <img onClick={previous} className='w-4 cursor-pointer' src={assets.back_icon} alt="Previous" />
      <img
        onClick={isPlaying ? pause : play}
        className='w-4 cursor-pointer'
        src={isPlaying ? assets.pause_icon : assets.play_icon}
        alt="Play/Pause"
      />
      <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
    </div>
  );
};

export default Playback;
