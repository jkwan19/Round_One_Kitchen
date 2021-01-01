import React from 'react';
import styled from 'styled-components';

const RecipeItem = styled.li`
  border: 1px;
  margin: auto;
  padding: 20px;
`;

function Recipe(props) {
  return (
    <RecipeItem>{props.value}</RecipeItem>
  )
}

export default Recipe;
