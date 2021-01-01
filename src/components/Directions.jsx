import React from 'react';
import styled from 'styled-components';

const Direction = styled.li`
  border: 1px;
  margin: auto;
  padding: 20px;
`;

function Directions(props) {
  return (
    <Direction>{props.value}</Direction>
  )
}

export default Directions;
