import React from 'react';
import YouTube from 'react-youtube';

type VideoProps = {
  videoId?: string;
};

interface Opts {
  height: string;
  width: string;
  playerVars: any;
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
  const opts: Opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event: any) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={_onReady} />;
};

export default Video;
