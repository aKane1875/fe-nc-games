import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCommentsByReviewId } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentList = ({ review_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByReviewId(review_id).then((returnedComments) => {
      setComments(returnedComments);
    });
  }, []);

  return (
    <section className="comments">
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} review_id={review_id} />
            </li>
          );
        })}
      </ul>
      <Link to={`/reviews/${review_id}/post_comment`} review_id={review_id}>
        <button>ADD COMMENT</button>
      </Link>
    </section>
  );
};

export default CommentList;
