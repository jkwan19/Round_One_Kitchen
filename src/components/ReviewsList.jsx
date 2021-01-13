import React, {useState} from 'react';
import Review from './Review';
import styled from 'styled-components';

const ReviewList = styled.ul`
  padding: 0;
`;

function ReviewsList(props) {
  const reviewBoard = props.reviewBoard;
  const listReviews = reviewBoard.map((data, index) =>
    <Review key={data._id}
            name={data.name}
            date={data.createdAt}
            rating={data.rating}
            review={data.comment} />
  )
  return (
    <ReviewList>
      {listReviews}
    </ReviewList>
  )
}

export default ReviewsList;