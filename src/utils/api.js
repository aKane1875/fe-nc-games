import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-reviews.herokuapp.com/api",
});

export const getCategories = () => {
  return reviewsApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category) => {
  let path = "/reviews";
  if (category) {
    path += `/?category=${category}`;
  }
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
