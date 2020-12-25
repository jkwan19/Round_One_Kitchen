import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import YoutubePlayer from './YoutubePlayer';
import Recipe from './Recipe';

function App() {
  return (
    <div>
      <NavigationBar />
      <YoutubePlayer />
      <Recipe />
    </div>

  );
}
export default App;
