import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReviewId } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [commentsLength, setCommentsLength] = useState(comments.length);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCommentsByReviewId(review_id)
      .then((returnedComments) => {
        setComments(returnedComments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
        setIsError(true);
      });
  }, [review_id, commentsLength]);

  return (
    <section className="comments">
      {isLoading ? (
        <h2 className="loading-msg">Please wait, fetching comments</h2>
      ) : null}
      {isError ? <h2>PLACEHOLDER ERROR</h2> : null}

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
