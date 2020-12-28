import React, {useState} from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import IconButton from '@material-ui/core/IconButton';

function ReviewButtons() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    alert(`Liked ${likes}`);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    alert(`Disliked ${dislikes}`);
  }

  return (
    <div>
      <ThumbUpIcon onClick={handleLike}></ThumbUpIcon>
      <ThumbDownIcon onClick={handleDislike}></ThumbDownIcon>
    </div>
  )
}

export default ReviewButtons;
