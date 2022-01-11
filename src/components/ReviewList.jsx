import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "../utils/api";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then((returnedReviews) => {
      setReviews(returnedReviews);
    });
  }, [category]);

  return (
    <ul className="reviews-list">
      {category ? (
        <h2>{category.toUpperCase()} GAME REVIEWS</h2>
      ) : (
        <h2> All REVIEWS</h2>
      )}
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
