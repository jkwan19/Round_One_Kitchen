import React, {useState} from 'react';
import styled from 'styled-components';
import HoverRating from './HoverRating';

const InputWrapper = styled.div`
  display: flex;
`;

function ReviewInput(props) {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(2);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleReviewText = (e) => {
    setComment(e.target.value);
  };

  const addRating = (value) => {
    setRating(value);
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const review = {
      name,
      comment,
      rating
    }
    console.log(review);
    props.addReview(review);
    setComment('');
    setName('');
    setRating(-1);
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
          value={comment}
          onChange={handleReviewText}/>
        <HoverRating addRating={addRating}/>
        <button>Add Review</button>
      </form>
    </InputWrapper>
  )
}

export default ReviewInput;
