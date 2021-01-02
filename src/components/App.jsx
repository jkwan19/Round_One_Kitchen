import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import YoutubePlayer from './YoutubePlayer';
import Blog from './Blog';
import ReviewButtons from './ReviewButtons';
import ShareButtons from './ShareButtons';
import data from '../ingredients.json';
import styled from 'styled-components';

const RecipeTitle = styled.h1`
  margin-top: 15%;
  text-color: blue;
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
  display: inline-flex;
  justify-content: space-between;
  width: 600px;
`;

const ReviewText = styled.div`
  text: strong;
`;


function App() {
  const [ingredients, setIngredients] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    setIngredients(data);
  }, [data])

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  }

  return (
    <div>
      <NavigationBar />
      <RecipeWrapper>
        <RecipeTitle>{data.name}</RecipeTitle>
        Likes:{likes}
        Dislikes:{dislikes}
        Reviews: {likes + dislikes}
        <ShareButtons/>
        <YoutubePlayer />
        <Blog ingredients={ingredients}/>
        <ReviewWrapper>
          <ReviewText>Leave a review of the recipe!</ReviewText>
          <ReviewButtons handleLike={handleLike} handleDislike={handleDislike}/>
        </ReviewWrapper>
      </RecipeWrapper>
    </div>
  );
}
export default App;
