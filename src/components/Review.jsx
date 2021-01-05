import React, {useState} from 'react';
import styled from 'styled-components';

function Review(props) {
  const review = props.review;
  return (
    <li>
      <span>{review}</span>
    </li>
  )
}

export default Review;