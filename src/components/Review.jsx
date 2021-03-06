import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById, patchReviewLikes } from "../utils/api";
import { Link } from "react-router-dom";
import CommentList from "./CommentList";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [commentsDisplayed, setCommentsDisplayed] = useState(false);
  const [reviewLikes, setReviewLikes] = useState();
  const [reviewLiked, setReviewLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id)
      .then((returnedReview) => {
        setReview(returnedReview.review);
        setReviewLikes(returnedReview.review.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [review_id]);

  const toggleComments = () => setCommentsDisplayed((currState) => !currState);

  const toggleLike = () => {
    if (!reviewLiked) {
      setReviewLiked(true);
      setReviewLikes((currentLikes) => currentLikes + 1);
      patchReviewLikes(review_id, 1).catch(() => {
        setReviewLiked(false);
        setReviewLikes((currentLikes) => currentLikes - 1);
      });
    } else {
      setReviewLiked(false);
      setReviewLikes((currentLikes) => currentLikes - 1);
      patchReviewLikes(review_id, -1).catch(() => {
        setReviewLiked(true);
        setReviewLikes((currentLikes) => currentLikes + 1);
      });
    }
  };

  return (
    <div className="review">
      {isError ? <h2>PLACEHOLDER ERROR</h2> : null}
      {isLoading ? (
        <h2 className="loading-msg">Please wait, fetching comment</h2>
      ) : null}
      {!review ? <h2>NO REVIEW FOUND WWITH THIS ID</h2> : null}
      <h2>{review.title}</h2>
      <p>{review.owner}</p>
      <img src={review.review_img_url} alt="user created pic" />
      <p className="review-body">{review.review_body}</p>
      <p>Likes: {reviewLikes}</p>
      <button className="like-button" onClick={toggleLike}>
        {reviewLiked ? "REMOVE LIKE" : "LIKE"}
      </button>
      <p>Comments: {review.comment_count}</p>
      <button
        id="comments-button"
        onClick={toggleComments}
        disabled={review.comment_count === 0}
      >
        {commentsDisplayed ? "HIDE COMMENTS" : "SEE COMMENTS"}
      </button>
      <Link to={`/reviews/${review_id}/post_comment`} review_id={review_id}>
        <button>ADD COMMENT</button>
      </Link>
      {commentsDisplayed && <CommentList review_id={review.review_id} />}
    </div>
  );
};

export default Review;
