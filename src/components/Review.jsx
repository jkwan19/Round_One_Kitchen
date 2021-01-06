import React, {useState} from 'react';
import styled from 'styled-components';

function Review(props) {
  const review = props.review;
  const name = props.name;
  return (
    <li>
      <h4>{name}</h4>
      <span>{review}</span>
    </li>
  )
}

export default Review;