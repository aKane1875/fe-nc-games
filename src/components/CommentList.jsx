import { useState, useEffect } from "react";

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
    </section>
  );
};

export default CommentList;
