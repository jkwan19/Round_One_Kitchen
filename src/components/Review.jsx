import React, {useState} from 'react';
import styled from 'styled-components';

const ReviewBox = styled.div`
  border: 1px solid;
`;

const UserNameText = styled.h4`
  text-align: left;
`;

function Review(props) {
  const review = props.review;
  const name = props.name;
  return (
    <ReviewBox>
      <UserNameText>{name}</UserNameText>
      <span>{review}</span>
    </ReviewBox>
  )
}

export default Review;