import React, {useState} from 'react';
import Review from './Review';
import styled from 'styled-components';

const ReviewList = styled.ul`
  padding: 0;
`;

function ReviewsList(props) {
  const reviewBoard = props.reviewBoard;
  const listReviews = reviewBoard.map((data, index) =>
    <Review key={index}
            name={data.name}
            review={data.review} />
  )
  return (
    <ReviewList>
      {listReviews}
    </ReviewList>
  )
}

export default ReviewsList;