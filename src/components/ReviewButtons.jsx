import React, {useState} from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import IconButton from '@material-ui/core/IconButton';

const ButtonWrapper = styled.div`
  margin: auto;
  padding: auto;
  float: right;
`;

function ReviewButtons(props) {

  return (
    <ButtonWrapper>
      <ThumbUpIcon onClick={props.handleLike}></ThumbUpIcon>
      <ThumbDownIcon onClick={props.handleDislike}></ThumbDownIcon>
    </ButtonWrapper>
  )
}

export default ReviewButtons;
