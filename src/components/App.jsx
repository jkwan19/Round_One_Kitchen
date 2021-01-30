import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as
  Router,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import Blog from './Blog';
import NavigationBar from './NavigationBar';
import RecipeList from './RecipeList';
import ReviewInput from './ReviewInput';
import ReviewsList from './ReviewsList';
import ShareButtons from './ShareButtons';
import YoutubePlayer from './YoutubePlayer';

const recipes =
[
  {
    "name": "Har Gow (蝦餃)",
    "ingredients": {
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
    },
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
];

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

const ReviewText = styled.div`
  text: strong;
  float: left;
`;

const FormWrapper = styled.div`
  display: inline-block;
`;

function App() {
  const [ingredients, setIngredients] = useState(recipes);
  const [reviewBoard, setReviewBoard] = useState([]);
  const [renderRecipe, setRenderRecipe] = useState(false);

  useEffect(() => {
    getReviews();
  }, []);

  const addName = (name) => {
    setName(name);
  }

  const addRating = (value) => {
    setRating(value);
  }

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

  const handleRecipeClick = () => {
    setRenderRecipe(!renderRecipe)
  }

  const renderRecipes = () => {
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
          <ReviewWrapper>
            <ReviewText>Leave a review of the recipe!</ReviewText>
            <FormWrapper>
              <ReviewInput
                addReview={addReview}
                />
            </FormWrapper>
            <ReviewsList
              reviewBoard={reviewBoard}
              />
          </ReviewWrapper>
      </RecipeWrapper>
      )
    }
    return (
      <div>
        <RecipeList handleRecipeClick={handleRecipeClick} />
      </div>
    )
  }



  return (
    <div>
      <NavigationBar />
      {renderRecipes()}
    </div>
  );
}
export default App;
