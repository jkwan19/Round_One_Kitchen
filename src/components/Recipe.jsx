import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import YoutubePlayer from './YoutubePlayer';
import ShareButtons from './ShareButtons';
import ReviewInput from './ReviewInput';
import ReviewsList from './ReviewsList';
import LoadingProgress from './LoadingProgress';
import recipes from '../../public/data/ingredients.json';

/* Styling */

const TitleWrapper = styled.div`
  width: 600px;
  display: inline-block;
`;

const RecipeTitle = styled.h1`
  margin-top: 15%;
  text-color: black;
`;

const RatingWrapper = styled.div`
  width: 67%;
  display: inline-block;
`;

const RecipeWrapper = styled.div`
  position: absolute;
  margin: auto;
  left: 33%;
  right: 33%;
  padding: auto;
  width: auto;
`;

const ReviewWrapper = styled.div`
  background-color: #B7B7B7;
  display: block;
  justify-content: space-between;
  width: 600px;
`;

const ReviewButtonWrapper = styled.div`
  display: inline-block;
  margin: auto;
  padding: auto;
  width: auto;
`;

const ReviewText = styled.div`
  text: strong;
  float: left;
`;

const ReviewButton = styled.button`
  float: right;
`;

const filterRecipe = (id) => {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      return recipes[i];
    }
  }
}
function Recipe (props) {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [reviewBoard, setReviewBoard] = useState([]);

  //   /* RENDER DISPLAY */

  // const renderDisplay = () => {
  //   return (
  //     <RecipeWrapper>
  //       <TitleWrapper>
  //         <RecipeTitle>{recipeDetails.name}</RecipeTitle>
  //         <RatingWrapper>
  //           {/* Reviews: {reviewBoard.length || 0} */}
  //         </RatingWrapper>
  //         <ShareButtons />
  //       </TitleWrapper>
  //       <YoutubePlayer />
  //       <ReviewButtonWrapper>
  //         <ReviewText>Leave a review of the recipe!</ReviewText>
  //         <ReviewButton>Add Review</ReviewButton>
  //       </ReviewButtonWrapper>
  //       <ReviewWrapper>
  //         <ReviewsList
  //           // reviewBoard={reviewBoard}
  //           />
  //       </ReviewWrapper>
  //   </RecipeWrapper>
  //   )

  // }

// const renderDirections = directions ? directions.map((item, index) => <BlogItem key={index} value={item} />) : <LoadingProgress />;

// const renderIngredients = ingredients.map((ingredient) => {
//   let category = Object.keys(ingredient)[0];
//   return (
//     <div>
//       <h3>{category}</h3>
//       <ul>
//         {ingredient ? ingredient[category].map((item) => {
//           return (<BlogItem value={item}/>)
//           }
//         ) : <LoadingProgress />}
//       </ul>
//     </div>
//   )

// })

  useEffect(() => {
     const recipeID = props.match.params.id; // <== only natively available in react-router v3
     const recipe = filterRecipe(recipeID);

     getReviews();
     setRecipeDetails(recipe);
  }, [recipeDetails])


  /* REVIEW CRUD */

  const getReviews = () => {
    axios.get('/api/reviews')
      .then(response => {
        console.log(response, 'reviews')
        setReviewBoard(response.data.data);
      })
      .catch(function (error){
        console.log('Error getting reviews: ', error);
      })
  }
  const addReview = (review) => {
    axios.post('/api/reviews', review)
      .then(res => {
        getReviews();
      });
  };

  return (
    !recipeDetails
      ? <div>Loading...</div>
      : <RecipeWrapper>
            <TitleWrapper>
              <RecipeTitle>{recipeDetails.name}</RecipeTitle>
              <RatingWrapper>
                {/* Reviews: {reviewBoard.length || 0} */}
              </RatingWrapper>
              <ShareButtons />
            </TitleWrapper>
            <YoutubePlayer videoID={recipeDetails.videoID}/>
            <ReviewButtonWrapper>
           <ReviewText>Leave a review of the recipe!</ReviewText>
            <ReviewButton>Add Review</ReviewButton>
          </ReviewButtonWrapper>
          <ReviewWrapper>
           {/* <ReviewsList
            reviewBoard={reviewBoard}
           />*/}
          </ReviewWrapper>

          <div>
            <h2>Ingredients</h2>
            <ol>
              <li>Stuff</li>
            </ol>
            <h2>Directions</h2>
            <ol>
              <li>cook</li>
            </ol>
          </div>
        </RecipeWrapper>
  )
}
export default Recipe;
