import React from 'react';

import LoadingProgress from './LoadingProgress';
import BlogItem from './BlogItem';

function Blog(props) {
  const recipes = props.recipes[0];
  const { ingredients } = recipes;
  const { directions } = recipes;

  const renderDirections = directions ? directions.map((item, index) => <BlogItem key={index} value={item} />) : <LoadingProgress />;

  const renderIngredients = ingredients.map((ingredient) => {
    let category = Object.keys(ingredient)[0];
    return (
      <div>
        <h3>{category}</h3>
        <ul>
          {ingredient ? ingredient[category].map((item) => {
            return (<BlogItem value={item}/>)
            }
          ) : <LoadingProgress />}
        </ul>
      </div>
    )

  })

  return (
    <div>
      <h2>Ingredients</h2>
      {renderIngredients}
      <h2>Directions</h2>
      <ol>
        {renderDirections}
      </ol>
    </div>

  );
}
export default Blog;
