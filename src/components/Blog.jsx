import React from 'react';

import Directions from './Directions';
import LoadingProgress from './LoadingProgress';
import Recipe from './Recipe';

function Blog(props) {
  const recipes = props.recipes[0];
  const { ingredients } = recipes;
  const { filling } = ingredients;
  const { dough } = ingredients;
  const { directions } = recipes;

  const renderFilling = filling ? filling.map((item, index) => <Recipe key={index} value={item} />) : <LoadingProgress />;

  const renderDough = dough ? dough.map((item, index) => <Recipe key={index} value={item} />) : <LoadingProgress />;

  const renderDirections = directions ? directions.map((item, index) => <Directions key={index} value={item} />) : <LoadingProgress />;

  return (
    <div>
      <h2>Ingredients</h2>
      <h3>Filling</h3>
      <ul>
        {renderFilling}
      </ul>
      <h3>Dough</h3>
      <ul>
        {renderDough}
      </ul>
      <h2>Directions</h2>
      <ol>
        {renderDirections}
      </ol>
    </div>

  );
}
export default Blog;
