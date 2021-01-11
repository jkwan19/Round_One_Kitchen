import React, {useState} from 'react';
import styled from 'styled-components';
import HoverRating from './HoverRating';

const InputWrapper = styled.div`
  display: flex;
`;

function ReviewInput(props) {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(-1);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleReviewText = (e) => {
    setReview(e.target.value);
  };

  const addRating = (value) => {
    setRating(value);
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    props.addName(name);
    props.addRating(rating);
    props.addReview(review);
    setRatingTotal(ratingTotal + 1);
    setName('');
    setReview('');
  };

  return (
    <InputWrapper>
      <form onSubmit={handleReviewSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName} />
        <textarea
          type="text"
          placeholder="Review"
          value={review}
          onChange={handleReviewText}/>
        <HoverRating addRating={addRating}/>
        <button>Add Review</button>
      </form>
    </InputWrapper>
  )
}

export default ReviewInput;
