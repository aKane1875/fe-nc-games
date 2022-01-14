import { Link } from "react-router-dom";
import dayjs from "dayjs";

const ReviewCard = ({ review }) => {
  return (
    <Link to={`/reviews/${review.review_id}`}>
      <h3>{review.title}</h3>
      <img src={review.review_img_url} alt="user created pic" />
      <h4>author: {review.owner}</h4>
      <p>created: {dayjs(review.created_at).toString()}</p>
      <p>
        LIKES: {review.votes} COMMENTS: {review.comment_count}
      </p>
    </Link>
  );
};

export default ReviewCard;
