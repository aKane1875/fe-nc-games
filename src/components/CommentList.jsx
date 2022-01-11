import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../utils/api";

const CommentList = ({ review_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByReviewId(review_id).then((returnedComments) => {
      setComments(returnedComments);
    });
  }, []);

  return (
    <ul className="comments-list">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>Likes: {comment.votes}</p>
            <button>LIKE</button>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
