import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const YoutubeWrapper = styled.div`
  margin-top: 10%;
`;

function YoutubePlayer(props) {
  const opts = {
    height: '390',
    width: '600',
    position: 'absolute',
    margin: 'auto',
    left: '50%',
    playerVars: {
      autoplay: 0,
    },
  };

  const videoID = props.videoID;

  const onReady = (e) => {
    e.target.pauseVideo();
  };
  return (
    <YoutubeWrapper>
      <YouTube
        videoId={videoID}
        opts={opts}
        onReady={onReady} />
    </YoutubeWrapper>
  );
}

export default YoutubePlayer;
