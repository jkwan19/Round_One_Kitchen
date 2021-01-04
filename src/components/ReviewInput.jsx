import React, {useState} from 'react';
import styled from 'styled-components';


function ReviewInput(props) {
  const [review, setReview] = useState('');

  const handleReviewText = (e) => {
    setReview(e.target.value);
  }

  const handleReviewSubmit = () => {
    props.addReviews(review);
    setReview('');
  }

  return (
    <div>
      <form onSubmit={handleReviewSubmit}>
        <input type="text" value={review} onChange={handleReviewText}/>
        <button>Add Review</button>
      </form>
    </div>
  )
}

export default ReviewInput;
