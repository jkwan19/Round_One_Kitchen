import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import NavigationBar from './NavigationBar';
import YoutubePlayer from './YoutubePlayer';
import Blog from './Blog';
import ReviewInput from './ReviewInput';
import ReviewsList from './ReviewsList';
import ShareButtons from './ShareButtons';
import HoverRating from './HoverRating';

import reviewData from '../../public/data/reviews.json';

const recipes = {
  "name": "Har Gow (蝦餃)",
  "filling": [
    "1lb Peeled, Deveined Shrimp",
    "1/4 tsp. Salt",
    "1 pinch White Pepper",
    "1/4 tsp. Chicken Boullion",
    "1/4 tsp. Corn Starch",
    "1 tsp. Sugar",
    "1/4 cup Fine Julienned Bamboo Shoots",
    "1/4 cup lard",
    "1/2 tsp. Sesame Oil"
  ],
  "dough": [
    "1 cup Wheat Flour",
    "1/2 cup Corn Starch",
    "2 cup Hot Water"
  ],
  "directions": [
    "Wash shrimp",
    "Mix dry ingredients",
    "Mix lard and wet ingredients",
    "Add rest of ingredients",
    "Mix together",
    "Make dough",
    "Scoop filling into dough",
    "Steam"
  ]
}
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
    axios.get('http://localhost:3000/reviews/')
      .then(response => {
        console.log(response.data, 'reviews received')
        setReviewBoard(response.data);
      })
      .catch(function (error){
          console.log(error);
      })
    setIngredients(recipes);
    // setReviewBoard(reviewData);
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
