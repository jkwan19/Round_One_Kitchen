import React, { useState, useEffect } from 'react';
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme.js";

import {
  BrowserRouter as
  Router,
  Switch,
  Route
} from "react-router-dom";

/* COMPONENTS */
import Home from './components/pages/Home';
import About from './components/pages/About';
import Recipe from './components/pages/Recipe';
import Login from './components/pages/Login';
import NavigationBar from './components/NavigationBar';
import RecipeList from './components/RecipeList';


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
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
}
export default App;
