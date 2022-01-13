import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("reviews.created_at");
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviews(category, sortBy)
      .then((returnedReviews) => {
        setReviews(returnedReviews);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category, sortBy]);

  const handleSortChange = (event) => {
    event.preventDefault();
    setSortBy(event.target.value);
  };

  return (
    <ul className="reviews-list">
      {category ? (
        <h2>{category.toUpperCase()} GAME REVIEWS</h2>
      ) : (
        <h2> ALL REVIEWS</h2>
      )}
      <div id="sort">
        <label for="sort_by">SORT BY: </label>
        <select name="sort_by" onChange={handleSortChange}>
          <option value="reviews.created_at">DATE</option>
          <option value="comment_count">COMMENTS</option>
          <option value="reviews.votes">LIKES</option>
        </select>
      </div>
      {isLoading ? <h2>Fetching reviews, please wait</h2> : null}
      {reviews.map((review) => {
        return (
          <li key={review.review_id}>
            <ReviewCard review={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
