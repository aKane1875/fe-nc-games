import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../utils/api";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((returnedReviews) => {
      setReviews(returnedReviews);
    });
  }, []);

  return (
    <ul className="reviews-list">
      <h2>REVIEWS</h2>
      {reviews.map((review) => {
        return (
          <li key={review.review_id}>
            <Link to={`/reviews/${review.review_id}`}>
              <p>{review.title}</p>
              <p>{review.owner}</p>
              <img src={review.review_img_url} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
