import React from 'react';
import Recipe from './Recipe'

function Blog(props) {
  const ingredients = props.ingredients;
  const filling = ingredients.filling;
  const dough = ingredients.dough;

  const renderFilling = filling ? filling.map((item, index) =>
    <Recipe key={index} value={item} />
  ) : <div>...Loading Filling</div>;

  const renderDough = dough ? dough.map((item, index) =>
      <Recipe key={index} value={item} />
    ) : <div>...Loading Dough</div>;

  return (
    <div>
      <h2>Ingredients</h2>
      <h3>Filling</h3>
      {renderFilling}
      <h3>Dough</h3>
      {renderDough}
    </div>

  )
}
export default Blog;