import React from 'react';
import YouTube from 'react-youtube';

function YouTubePlayer() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <YouTube videoId="32iji_1Nduo" opts={opts} onReady={_onReady} />
  );
};

export default YouTubePlayer;
