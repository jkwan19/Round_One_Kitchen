import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import YoutubePlayer from './YoutubePlayer';
import Recipe from './Recipe';
import data from '../ingredients.json'

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(data);
  }, [])

  return (
    <div>
      <NavigationBar />
      <YoutubePlayer />
      <Recipe />
    </div>

  );
}
export default App;
