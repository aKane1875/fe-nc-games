import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <Link to={`/reviews/${review.review_id}`}>
      <p>{review.title}</p>
      <p>{review.owner}</p>
      <p>{Date(review.created_at)}</p>
      <img src={review.review_img_url} />
      <p>
        LIKES: {review.votes} COMMENTS: {review.comment_count}
      </p>
    </Link>
  );
};

export default ReviewCard;
