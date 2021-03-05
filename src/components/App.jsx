import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as
  Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

/* COMPONENTS */
import Home from './HomePage';
import About from './AboutPage';
import Recipe from './Recipe';
import Login from './Login';
import NavigationBar from './NavigationBar';
import RecipeList from './RecipeList';

/* COMPONENT STYLING */
const AppWrapper = styled.div`
`;

function App() {

  // useEffect(() => {
  //   getReviews();
  // }, []);

  // const addName = (name) => {
  //   setName(name);
  // }

  // const addRating = (value) => {
  //   setRating(value);
  // }


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
