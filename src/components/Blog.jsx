import React, { useState, useEffect } from 'react';

import LoadingProgress from './LoadingProgress';
import BlogItem from './BlogItem';
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

function Blog (props) {
  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    console.log(props, recipes, 'props')
     const { recipeId } = props.location.query; // <== only natively available in react-router v3

     setRecipeDetails(recipes.recipeId)
  }, recipeDetails)

  return (
    !recipeDetails
      ? <div>Loading...</div>
      : <ul>
         {recipeDetails.map(ingredient => (
           <li key={ingredient}>ingredient</li>
         )
         )}
        </ul>
  )
}
export default Blog;
