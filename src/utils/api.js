import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-reviews.herokuapp.com/api",
});

export const getCategories = () => {
  return reviewsApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category, sort_by) => {
  let path = "/reviews";
  if (category && sort_by) {
    path += `?category=${category}&sort_by=${sort_by}`;
  } else if (category) {
    path += `?category=${category}`;
  } else if (sort_by) {
    path += `?sort_by=${sort_by}`;
  }
  console.log(path);
  return reviewsApi.get(path).then((res) => {
    return res.data.reviews;
  });
};

export const getReviewById = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data;
  });
};

export const getCommentsByReviewId = (review_id) => {
  return reviewsApi.get(`reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchReviewLikes = (review_id, numToAmend) => {
  return reviewsApi
    .patch(`/reviews/${review_id}`, { inc_votes: numToAmend })
    .then((res) => {
      return res.data.updatedReview;
    });
};

export const patchCommentLikes = (comment_id, numToAmend) => {
  return reviewsApi
    .patch(`/comments/${comment_id}`, { inc_votes: numToAmend })
    .then((res) => {
      return res.data.updatedComment;
    });
};

export const postComment = (username, body, review_id) => {
  return reviewsApi
    .post(`/reviews/${review_id}/comments`, {
      username: username,
      body: body,
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};
