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
import Recipe from './Recipe';
import Login from './Login';
import NavigationBar from './NavigationBar';
import RecipeList from './RecipeList';
import ReviewInput from './ReviewInput';
import ReviewsList from './ReviewsList';



/* COMPONENT STYLING */
const AppWrapper = styled.div`
`;

function App() {
  const [reviewBoard, setReviewBoard] = useState([]);

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


  return (
    <AppWrapper>
      <Router>
        <NavigationBar />
        <Switch>
          <Route
            exact path="/"
            component={Home}
            />
          <Route
            path="/recipes"
            exact component={RecipeList}
            />
          <Route
            path="/recipes/:id"
            component={Recipe}
            />
          <Route
            path="/about"
            component={About}
            />
          <Route
            path="/login"
            component={Login}
          />
        </Switch>
      </Router>
    </AppWrapper>
  );
}
export default App;
