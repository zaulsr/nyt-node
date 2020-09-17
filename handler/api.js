const axios = require("axios").default;

const articleApi = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  timeout: 5000,
  params: {
    "api-key": process.env.NYT_API_KEY,
  },
});

const bookApi = axios.create({
  baseURL: "https://api.nytimes.com/svc/books/v3/lists",
  timeout: 5000,
  params: {
    "api-key": process.env.NYT_API_KEY,
  },
});

module.exports = {
  articleApi,
  bookApi,
  axios,
};
