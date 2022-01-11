import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById } from "../utils/api";
import CommentList from "./CommentList";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [commentsDisplayed, setCommentsDisplayed] = useState(false);

  useEffect(() => {
    getReviewById(review_id).then((returnedReview) => {
      setReview(returnedReview.review);
    });
  }, []);

  const toggleComments = () => setCommentsDisplayed((currState) => !currState);

  return (
    <div>
      <h2>{review.title}</h2>
      <p>{review.owner}</p>
      <img src={review.review_img_url} />
      <p>{review.review_body}</p>
      <p>Likes: {review.votes}</p>
      <button>LIKE</button>
      <p>Comments: {review.comment_count}</p>
      <button id="comments-button" onClick={toggleComments}>
        See Comments
      </button>
      {commentsDisplayed && <CommentList review_id={review.review_id} />}
    </div>
  );
};

export default Review;
