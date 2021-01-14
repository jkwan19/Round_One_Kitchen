import React from 'react';
import Recipe from './Recipe';
import Directions from './Directions';

function Blog(props) {
  const recipes = props.recipes[0];
  const { ingredients } = recipes;
  const { filling } = ingredients;
  const { dough } = ingredients;
  const { directions } = recipes;

  const renderFilling = filling ? filling.map((item, index) => <Recipe key={index} value={item} />) : <div>...Loading Filling</div>;

  const renderDough = dough ? dough.map((item, index) => <Recipe key={index} value={item} />) : <div>...Loading Dough</div>;

  const renderDirections = directions ? directions.map((item, index) => <Directions key={index} value={item} />) : <div>....Loading Directions</div>;

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
