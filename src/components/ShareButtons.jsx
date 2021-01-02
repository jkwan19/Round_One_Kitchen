import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const ShareWrapper = styled.div`
  float: right;
`;

function ShareButtons() {

  const handleFacebook = () => {
    alert('facebook');
  }

  const handleTwitter = () => {
    alert('twitter');
  }

  return (
    <ShareWrapper>
      <FacebookIcon color="primary" onClick={handleFacebook}/>
      <TwitterIcon color="primary" onClick={handleTwitter}/>
    </ShareWrapper>
  );
}

export default ShareButtons;