import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import YoutubePlayer from './YoutubePlayer';
import Blog from './Blog';
import ReviewInput from './ReviewInput';
import ReviewsList from './ReviewsList';
import ShareButtons from './ShareButtons';
import HoverRating from './HoverRating';
import recipes from '../../public/data/ingredients.json';
import reviewData from '../../public/data/reviews.json';

const TitleWrapper = styled.div`
  width: 600px;
  display: inline-block;
`;

const RecipeTitle = styled.h1`
  margin-top: 15%;
  text-color: blue;
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
  display: inline-block;
  justify-content: space-between;
  width: 600px;
`;

const ReviewText = styled.div`
  text: strong;
  float: left;
`;

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [reviewBoard, setReviewBoard] = useState([]);

  useEffect(() => {
    setIngredients(recipes);
    setReviewBoard(reviewData);
  }, [recipes, reviewBoard]);

  const addName = (name) => {
    setName(name);
  }

  const addReview = (review) => {
    const newReview = {
      name,
      review
    }
    const reviews = [...reviewBoard, newReview];
    setReviewBoard(reviews);
  };


  return (
    <div>
      <NavigationBar />
      <RecipeWrapper>
        <TitleWrapper>
          <RecipeTitle>{recipes.name}</RecipeTitle>
          <RatingWrapper>
            Reviews: 0
            <HoverRating />
          </RatingWrapper>
          <ShareButtons />
        </TitleWrapper>
        <YoutubePlayer />
        <Blog ingredients={ingredients} />
        <ReviewWrapper>
          <ReviewText>Leave a review of the recipe!</ReviewText>
          <ReviewInput addReview={addReview} addName={addName} />
          <ReviewsList reviewBoard={reviewBoard}/>
        </ReviewWrapper>
      </RecipeWrapper>
    </div>
  );
}
export default App;
