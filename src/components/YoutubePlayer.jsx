import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const YoutubeWrapper = styled.div`
  margin-top: 10%;
`;

function YoutubePlayer() {
  const opts = {
    height: '390',
    width: '600',
    position: 'absolute',
    margin: 'auto',
    left: '50%',
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <YoutubeWrapper>
      <YouTube videoId="32iji_1Nduo" opts={opts} onReady={onReady} />
    </YoutubeWrapper>
  );
}

export default YoutubePlayer;
