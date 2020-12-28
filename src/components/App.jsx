import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import YoutubePlayer from './YoutubePlayer';
import Blog from './Blog';
import data from '../ingredients.json';
import styled from 'styled-components';

const RecipeWrapper = styled.div`
  position: absolute;
  margin: auto;
  left: 33%;
`

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(data);
  }, [data])

  return (
    <div>
      <NavigationBar />
      <RecipeWrapper>
        <YoutubePlayer />
        <Blog ingredients={ingredients}/>
      </RecipeWrapper>
    </div>
  );
}
export default App;
