import React, { useState, useEffect } from 'react';

import LoadingProgress from './LoadingProgress';
import recipes from '../../public/data/ingredients.json';

// function Blog(props) {

//   const recipe = props.data;
//   console.log(recipe.id, 'id')
//   const { ingredients } = recipe;
//   const { directions } = recipe;

//   /* RENDER DISPLAY */

//   const renderDisplay = () => {
//       return (
//         <RecipeWrapper>
//           <TitleWrapper>
//             <RecipeTitle>{recipes.name}</RecipeTitle>
//             <RatingWrapper>
//               Reviews: {reviewBoard.length || 0}
//             </RatingWrapper>
//             <ShareButtons />
//           </TitleWrapper>
//           <YoutubePlayer />
//           <Blog
//             recipes={ingredients}
//             />
//           <ReviewButtonWrapper>
//             <ReviewText>Leave a review of the recipe!</ReviewText>
//             <ReviewButton>Add Review</ReviewButton>
//           </ReviewButtonWrapper>
//           <ReviewWrapper>
//             <ReviewsList
//               reviewBoard={reviewBoard}
//               />
//           </ReviewWrapper>
//       </RecipeWrapper>
//       )

//   }

//   const renderDirections = directions ? directions.map((item, index) => <BlogItem key={index} value={item} />) : <LoadingProgress />;

//   const renderIngredients = ingredients.map((ingredient) => {
//     let category = Object.keys(ingredient)[0];
//     return (
//       <div>
//         <h3>{category}</h3>
//         <ul>
//           {ingredient ? ingredient[category].map((item) => {
//             return (<BlogItem value={item}/>)
//             }
//           ) : <LoadingProgress />}
//         </ul>
//       </div>
//     )

//   })

//   return (
//     <div>
//       <h2>Ingredients</h2>
//       {renderIngredients}
//       <h2>Directions</h2>
//       <ol>
//         {renderDirections}
//       </ol>
//     </div>

//   );
// }

const filterRecipe = (id) => {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      return recipes[i];
    }
  }
}
function Recipe (props) {
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
     const recipeID = props.match.params.id; // <== only natively available in react-router v3
     const recipe = filterRecipe(recipeID);
     setRecipeDetails(recipe);
  }, [recipeDetails])
  return (
    !recipeDetails
      ? <div>Loading...</div>
      : <div>{recipeDetails.name}</div>
  )
}
export default Recipe;
