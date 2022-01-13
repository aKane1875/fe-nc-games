import { useState, useEffect } from "react";

import { getCommentsByReviewId } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentList = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [commentsLength, setCommentsLength] = useState(comments.length);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByReviewId(review_id).then((returnedComments) => {
      setComments(returnedComments);
      setIsLoading(false);
    });
  }, [commentsLength]);

  return (
    <section className="comments">
      {isLoading ? <h2>Please wait, fetching comments</h2> : null}
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                comment={comment}
                setCommentsLength={setCommentsLength}
                review_id={review_id}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentList;
