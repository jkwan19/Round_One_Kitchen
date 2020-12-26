import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import YoutubePlayer from './YoutubePlayer';
import Blog from './Blog';
import data from '../ingredients.json'

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(data);
  }, [data])

  return (
    <div>
      <NavigationBar />
      <YoutubePlayer />
      <Blog ingredients={ingredients}/>
    </div>

  );
}
export default App;
