import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-reviews.herokuapp.com/api",
});

export const getCategories = () => {
  return reviewsApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};
