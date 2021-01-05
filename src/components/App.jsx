import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import YoutubePlayer from './YoutubePlayer';
import Blog from './Blog';
import ReviewInput from './ReviewInput';
import ReviewsList from './ReviewsList';
import ShareButtons from './ShareButtons';
import HoverRating from './HoverRating';
import data from '../ingredients.json';

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
  const [reviewBoard, setReviewBoard] = useState([]);

  useEffect(() => {
    setIngredients(data);
  }, [data]);

  const addReviews = (review) => {
    const reviews = [...reviewBoard, review];
    setReviewBoard(reviews);
  }

  return (
    <div>
      <NavigationBar />
      <RecipeWrapper>
        <TitleWrapper>
          <RecipeTitle>{data.name}</RecipeTitle>
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
          <ReviewInput addReviews={addReviews} />
          <ReviewsList reviewBoard={reviewBoard}/>
        </ReviewWrapper>
      </RecipeWrapper>
    </div>
  );
}
export default App;
