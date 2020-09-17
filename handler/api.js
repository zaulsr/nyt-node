const axios = require("axios").default;
const qs = require("qs");

const articleApi = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  timeout: 5000,
  paramsSerializer: (params) => {
    const serializedParams = qs.stringify(params, { arrayFormat: "repeat" });
    return `${serializedParams}&api-key=${process.env.NYT_API_KEY}`;
  },
});

const bookApi = axios.create({
  baseURL: "https://api.nytimes.com/svc/books/v3",
  timeout: 5000,
  paramsSerializer: (params) => {
    const serializedParams = qs.stringify(params, { arrayFormat: "repeat" });
    return `${serializedParams}&api-key=${process.env.NYT_API_KEY}`;
  },
});

module.exports = {
  articleApi,
  bookApi,
};
