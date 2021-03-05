import React from 'react';
import LoadingProgress from './LoadingProgress';

function Directions (props) {
  const directions = props.directions || [];
  const listDirections = directions.map(direction => {
    return (
      <li>{direction}</li>
    )
  }) || <LoadingProgress />

  return (
    <ol>{listDirections}</ol>
  )
}

export default Directions;