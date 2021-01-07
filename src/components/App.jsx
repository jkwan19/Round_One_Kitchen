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
  background-color: #B7B7B7;
  display: block;
  justify-content: space-between;
  width: 600px;
`;

const ReviewText = styled.div`
  text: strong;
  float: left;
`;

const FormWrapper = styled.div`
  display: inline-block;
`;

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [reviewBoard, setReviewBoard] = useState([]);
  const [ratingTotal, setRatingTotal] = useState(0);

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

  const addRating = (rating) => {
    setRatingTotal(ratingTotal + 1);
  }


  return (
    <div>
      <NavigationBar />
      <RecipeWrapper>
        <TitleWrapper>
          <RecipeTitle>{recipes.name}</RecipeTitle>
          <RatingWrapper>
            Ratings: {ratingTotal}
            <HoverRating addRating={addRating}/>
          </RatingWrapper>
          <ShareButtons />
        </TitleWrapper>
        <YoutubePlayer />
        <Blog ingredients={ingredients} />
        <ReviewWrapper>
          <ReviewText>Leave a review of the recipe!</ReviewText>
          <FormWrapper>
            <ReviewInput addReview={addReview} addName={addName} />
          </FormWrapper>
          <ReviewsList reviewBoard={reviewBoard}/>
        </ReviewWrapper>
      </RecipeWrapper>
    </div>
  );
}
export default App;
