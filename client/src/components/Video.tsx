import React from 'react';
import { useVideojs } from 'react-videojs-hook';
 
import 'video.js/dist/video-js.css';
 
const Video = () => {
  const onPlay = (currentTime?: number) => {
    console.log("Video played at: ", currentTime);
  };
 
  const onPause = (currentTime?: number) => {
    console.log("Video paused at: ", currentTime);
  };
 
  const onEnd = (currentTime?: number) => {
    console.log(`Video ended at ${currentTime}`);
  };
 
  const onTimeUpdate = (currentTime: number) => {
    console.log(`Video current time is ${currentTime}`)
  };
 
  const { vjsId, vjsRef, vjsClassName } = useVideojs({
    src: 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
    controls: true,
    autoplay: true,
    responsive: true,
    bigPlayButtonCentered: true,
    onPlay,
    onPause,
    onEnd,
    onTimeUpdate,
  });
 
 
  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  return (
    <div data-vjs-player>
      <video ref={vjsRef} id={vjsId} className={vjsClassName}></video>
    </div>
  )
}

export default Video;