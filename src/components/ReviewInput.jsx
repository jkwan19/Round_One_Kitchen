import React, {useState} from 'react';
import styled from 'styled-components';


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
    <div>
      <form onSubmit={handleReviewSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={handleName} />
        <input type="text" placeholder="Review" value={review} onChange={handleReviewText}/>
        <button>Add Review</button>
      </form>
    </div>
  )
}

export default ReviewInput;
