import React, { useState } from 'react';

import LoadingProgress from './LoadingProgress';
import BlogItem from './BlogItem';

function Blog(props) {

  const [renderRecipe, setRenderRecipe] = useState(false);
  const handleRecipeClick = () => {
    setRenderRecipe(!renderRecipe)
  };

  /* RENDER DISPLAY */

  const renderDisplay = () => {
    if (renderRecipe) {
      return (
        <RecipeWrapper>
          <TitleWrapper>
            <RecipeTitle>{recipes[0].name}</RecipeTitle>
            <RatingWrapper>
              Reviews: {reviewBoard.length || 0}
            </RatingWrapper>
            <ShareButtons />
          </TitleWrapper>
          <YoutubePlayer />
          <Blog
            recipes={ingredients}
            />
          <ReviewButtonWrapper>
            <ReviewText>Leave a review of the recipe!</ReviewText>
            <ReviewButton>Add Review</ReviewButton>
          </ReviewButtonWrapper>
          <ReviewWrapper>
            <ReviewsList
              reviewBoard={reviewBoard}
              />
          </ReviewWrapper>
      </RecipeWrapper>
      )
    }

  }

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
