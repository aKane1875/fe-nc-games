import { useState, useEffect } from "react";
import { patchCommentLikes } from "../utils/api";

const CommentCard = ({ comment, review_id }) => {
  const [commentLikes, setCommentLikes] = useState(comment.votes);
  const [commentLiked, setCommentLiked] = useState(false);

  const toggleLike = () => {
    if (!commentLiked) {
      setCommentLiked(true);
      setCommentLikes((currentLikes) => currentLikes + 1);
      patchCommentLikes(review_id, 1).catch(() => {
        setCommentLiked(false);
        setCommentLikes((currentLikes) => currentLikes - 1);
      });
    } else {
      setCommentLiked(false);
      setCommentLikes((currentLikes) => currentLikes - 1);
      patchCommentLikes(review_id, -1).catch(() => {
        setCommentLiked(true);
        setCommentLikes((currentLikes) => currentLikes + 1);
      });
    }
  };

  return (
    <>
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>Likes: {commentLikes}</p>
      <button onClick={toggleLike}>
        {commentLiked ? "REMOVE LIKE" : "LIKE"}
      </button>
    </>
  );
};

export default CommentCard;
