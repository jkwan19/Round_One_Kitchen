import React, {useState} from 'react';
import Review from './Review';
import styled from 'styled-components';

function ReviewsList(props) {
  const reviewBoard = props.reviewBoard;
  const listReviews = reviewBoard.map((review, index) =>
    <Review key={index}
            review={review} />
  )
  return (
    <ul>
      {listReviews}
    </ul>
  )
}

export default ReviewsList;