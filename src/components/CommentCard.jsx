import { useState } from "react";
import { deleteComment, patchCommentLikes } from "../utils/api";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const CommentCard = ({ comment, setCommentsLength, review_id }) => {
  const [commentLikes, setCommentLikes] = useState(comment.votes);
  const [commentLiked, setCommentLiked] = useState(false);

  const { user } = useContext(UserContext);

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

  const removeComment = (event) => {
    deleteComment(event.target.name).then(() => {
      setCommentsLength((currComments) => currComments - 1);
    });
  };

  return (
    <div className="comment-card">
      <h4 id="comment">{comment.body}</h4>
      <p>author: {comment.author}</p>
      <p>created: {Date(comment.created_at).slice(0, 21)}</p>
      <p>Likes: {commentLikes}</p>
      <button onClick={toggleLike}>
        {commentLiked ? "REMOVE LIKE" : "LIKE"}
      </button>
      {user.username === comment.author ? (
        <button name={comment.comment_id} onClick={removeComment}>
          DELETE COMMENT
        </button>
      ) : null}
    </div>
  );
};

export default CommentCard;
