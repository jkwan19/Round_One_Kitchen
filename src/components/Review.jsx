import React, {useState} from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const ReviewBox = styled.div`
  border: 1px solid;
`;

const UserNameText = styled.h4`
  text-align: left;
`;

function Review(props) {
  const review = props.review;
  const name = props.name;
  const rating = props.rating;

  const date = moment(props.date).format('MMMM Do YYYY, h:mm:ss a')
  return (
    <ReviewBox>
      <UserNameText>{name}</UserNameText>
      <span>{review}</span>
      <Box component="fieldset" mb={3}      borderColor="transparent">
        <Rating name="read-only" value={rating} readOnly />
      </Box>
      <div>{date}</div>
    </ReviewBox>
  )
}

export default Review;