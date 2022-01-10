import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-reviews.herokuapp.com/api",
});

export const getCategories = () => {
  return reviewsApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = () => {
  return reviewsApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};
