import React from 'react';

import LoadingProgress from './LoadingProgress';
import Item from './Item';

function Ingredients (props) {
  const ingredients = props.ingredients || [];
  const listIngredientTitle = ingredients.map((data) => {
    return (
      <>
      <h3>{data.type}</h3>
      <Item />
      </>
    )
  }) || <LoadingProgress />

  return (
    <ol>
      {listIngredientTitle}
    </ol>
  )
}

export default Ingredients;