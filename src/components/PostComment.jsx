import { useContext } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

const PostComment = () => {
  let { review_id } = useParams();
  review_id = Number(review_id);

  const { user } = useContext(UserContext);

  const submitComment = (event) => {
    const comment = event.target[0].value;
    postComment(user.username, comment, review_id)
      .then((returnedReview) => {
        console.log(returnedReview);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="post-comment-form">
      <h2>POSTING AS: {user.username}</h2>
      <form onSubmit={submitComment} action={`/reviews/${review_id}`}>
        PLEASE ENTER YOUR COMMENT BELOW:
        <input id="comment" type="textarea" name="comment-body" />
        <br></br>
        <button>Submit Comment</button>
      </form>
    </section>
  );
};

export default PostComment;
