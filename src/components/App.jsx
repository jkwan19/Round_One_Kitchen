import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as
  Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

/* COMPONENTS */
import Home from './HomePage';
import About from './AboutPage';
import Blog from './Blog';
import NavigationBar from './NavigationBar';
import RecipeList from './RecipeList';
import ReviewInput from './ReviewInput';
import ReviewsList from './ReviewsList';
import ShareButtons from './ShareButtons';
import YoutubePlayer from './YoutubePlayer';
import recipes from '../../public/data/ingredients.json';

/* COMPONENT STYLING */
const AppWrapper = styled.div`
`;

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

  /* Connect to back end */

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



  return (
    <AppWrapper>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
      {renderDisplay()}
    </AppWrapper>
  );
}
export default App;
