import React, {useState} from 'react';
import Review from './Review';
import styled from 'styled-components';

function ReviewsList(props) {
  const reviewBoard = props.reviewBoard;
  const listReviews = reviewBoard.map((data, index) =>
    <Review key={index}
            name={data.name}
            review={data.review} />
  )
  return (
    <ul>
      {listReviews}
    </ul>
  )
}

export default ReviewsList;