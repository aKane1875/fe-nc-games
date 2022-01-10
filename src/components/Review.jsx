import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById } from "../utils/api";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getReviewById(review_id).then((returnedReview) => {
      setReview(returnedReview.review);
    });
  }, []);

  return (
    <div>
      <h2>{review.title}</h2>
      <p>{review.review_body}</p>
    </div>
  );
};

export default Review;
