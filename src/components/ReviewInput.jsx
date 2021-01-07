import React, {useState} from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
`;

function ReviewInput(props) {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleReviewText = (e) => {
    setReview(e.target.value);
  };


  const handleReviewSubmit = (e) => {
    e.preventDefault();
    props.addName(name);
    props.addReview(review);
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
        <button>Add Review</button>
      </form>
    </InputWrapper>
  )
}

export default ReviewInput;
