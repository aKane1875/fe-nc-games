import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

const PostComment = () => {
  let { review_id } = useParams();
  review_id = Number(review_id);
  const submitComment = (event) => {
    const user = event.target[0].value;
    const comment = event.target[1].value;
    postComment(user, comment, review_id)
      .then((returnedReview) => {
        console.log(returnedReview);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="post-comment-form">
      <form onSubmit={submitComment} action={`/reviews/${review_id}`}>
        NAME:
        <input type="text" name="username" />
        <br></br>
        COMMENT:
        <input id="comment" type="textarea" name="comment-body" />
        <br></br>
        <button>Submit Comment</button>
      </form>
    </section>
  );
};

export default PostComment;
