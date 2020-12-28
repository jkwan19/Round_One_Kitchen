import React from 'react';
import YouTube from 'react-youtube';

function YoutubePlayer() {
  const opts = {
    height: '390',
    width: '640',
    position: 'absolute',
    margin: 'auto',
    top: '50%',
    left: '50%',
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <YouTube videoId="32iji_1Nduo" opts={opts} onReady={onReady} />
  );
}

export default YoutubePlayer;
