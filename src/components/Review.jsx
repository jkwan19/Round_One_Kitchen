import React, {useState} from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ReviewBox = styled.div`
  border: 1px solid;
`;

const UserNameText = styled.h4`
  text-align: left;
`;

function Review(props) {
  const review = props.review;
  const name = props.name;
  const date = moment(props.date).format('MMMM Do YYYY, h:mm:ss a')
  return (
    <ReviewBox>
      <UserNameText>{name}</UserNameText>
      <span>{review}</span>
      <div>{date}</div>
    </ReviewBox>
  )
}

export default Review;