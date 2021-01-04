import React, {useState} from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterShareButton,
  TwitterShareCount,
  TwitterIcon,
  RedditShareButton,
  RedditShareCount,
  RedditIcon
} from 'react-share';

const ShareWrapper = styled.div`
  float: right;
`;

function ShareButtons() {
  const [shareUrl, setShareUrl] = useState('https://github.com/jkwan19')

  return (
    <ShareWrapper>
      <FacebookShareButton
        url={shareUrl}
        quote={'Har Gow Recipe by Round One Kitchen'}
        className={'facebookButton'}>
        <FacebookIcon
          size={30}
          round={true}/>
        <FacebookShareCount />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        quote={'Har Gow Recipe by Round One Kitchen'}
        className={'twitterButton'}>
        <TwitterIcon
          size={30}
          round={true}/>
      </TwitterShareButton>
      <RedditShareButton
        url={shareUrl}
        quote={'Har Gow Recipe by Round One Kitchen'}
        className={'redditButton'}>
        <RedditIcon
          size={30}
          round={true}
          bgStyle={{fill: '#FF5700'}}
        />
      </RedditShareButton>
    </ShareWrapper>
  );
}

export default ShareButtons;