import React from 'react';

import LoadingProgress from './LoadingProgress';
import Item from './Item';

function Ingredients (props) {
  const ingredients = props.ingredients || [];
  const listIngredientTitle = ingredients.map((data) => {
    return (
      <>
      <h3>{data.type}</h3>
      <Item items={data.items}/>
      </>
    )
  }) || <LoadingProgress />

  return (
    <ul>
      {listIngredientTitle}
    </ul>
  )
}

export default Ingredients;